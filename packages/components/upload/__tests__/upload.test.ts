import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Upload from '../src/Upload.vue'

// 定义 MockXMLHttpRequest 类来捕获处理程序
class MockXMLHttpRequest {
  open = vi.fn()
  send = vi.fn()
  setRequestHeader = vi.fn()
  addEventListener = vi.fn()
  removeEventListener = vi.fn()
  status = 200
  onload: (() => void) | null = null
  onerror: (() => void) | null = null
  upload = {
    onprogress: null as ((progressEvent: ProgressEvent) => void) | null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  }

  // 静态属性来保存最后创建的实例
  static lastInstance: MockXMLHttpRequest | null = null

  constructor() {
    MockXMLHttpRequest.lastInstance = this
  }
}

describe('Upload组件', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // 将 XMLHttpRequest 替换为模拟类
    vi.stubGlobal('XMLHttpRequest', MockXMLHttpRequest)
  })

  afterEach(() => {
    MockXMLHttpRequest.lastInstance = null // 每次测试后清除实例
  })

  describe('组件渲染测试', () => {
    test('默认插槽渲染', () => {
      const wrapper = mount(Upload, {
        slots: { default: '<button id="upload-btn">upload</button>' }
      })
      expect(wrapper.find('#upload-btn').exists()).toBe(true)
    })
    test('拖拽模式渲染', () => {
      const wrapper = mount(Upload, {
        props: { drag: true },
        slots: { default: '<h3>drag upload</h3>' }
      })
      expect(wrapper.find('.ne-upload-dragger').exists()).toBe(true)
      expect(wrapper.find('.ne-upload-dragger h3').text()).toBe('drag upload')
    })
    test('禁用状态渲染', () => {
      const wrapper = mount(Upload, {
        props: { disabled: true },
        slots: { default: '<h3>drag upload</h3>' }
      })
      expect(wrapper.find('.ne-upload').classes()).toContain('is-disabled')
      // 验证文件输入框是否存在且被禁用
      const input = wrapper.find('input[type="file"]')
      expect(input.exists()).toBe(true)
      expect(input.attributes().disabled).toBeDefined()
    })
  })

  describe('文件上传测试', () => {
    test('文件上传成功', async () => {
      const onSuccess = vi.fn()
      const onProgress = vi.fn()
      const wrapper = mount(Upload, {
        props: {
          action: '/upload',
          onSuccess,
          onProgress
        }
      })

      const input = wrapper.find('input[type="file"]')
      const file = new File(['foo'], 'foo.txt', { type: 'text/plain' })

      // 模拟文件选择
      Object.defineProperty(input.element, 'files', {
        value: [file],
        writable: false
      })

      // 触发 change 事件
      await input.trigger('change')
      await nextTick()

      // 获取 ajaxUpload 创建的模拟 XHR 实例
      const xhr = MockXMLHttpRequest.lastInstance!

      // 断言 open 和 send 是否被调用
      expect(xhr.open).toHaveBeenCalledWith('POST', '/upload', true)
      expect(xhr.send).toHaveBeenCalledWith(expect.any(FormData))

      // 模拟上传进度事件
      if (xhr.upload.onprogress) {
        const mockProgressEvent = new ProgressEvent('progress', {
          loaded: 50,
          total: 100,
          lengthComputable: true
        })
        xhr.upload.onprogress(mockProgressEvent)
      }

      // 模拟成功上传
      if (xhr.onload) {
        xhr.onload()
      }
      await nextTick()

      expect(onSuccess).toHaveBeenCalled()
      expect(onProgress).toHaveBeenCalled()
    })
  })
})
