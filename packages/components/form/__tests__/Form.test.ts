import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Form from '../src/Form.vue'
import FormItem from '../src/FormItem.vue'
import Input from '../../input/src/Input.vue'

describe('Form组件', () => {
  // 基础渲染测试
  describe('基础渲染测试', () => {
    // 表单渲染测试
    test('表单渲染', () => {
      const wrapper = mount(Form, {
        props: {
          model: { username: 'test' }
        }
      })

      expect(wrapper.exists()).toBe(true)
      expect(wrapper.classes()).toContain('ne-form')
    })

    // 表单项渲染测试
    test('表单项渲染', () => {
      const wrapper = mount({
        template: `
        <ne-form :model="model">
          <ne-form-item label="用户名" prop="username">
            <ne-input v-model="model.username" />
          </ne-form-item>
        </ne-form>
      `,
        components: {
          'ne-form': Form,
          'ne-form-item': FormItem,
          'ne-input': Input
        },
        data() {
          return {
            model: { username: 'test' }
          }
        }
      })

      expect(wrapper.find('.ne-form-item').exists()).toBe(true)
      expect(wrapper.find('.ne-form-item__label').text()).toBe('用户名')
    })
  })

  // 基础校验测试
  describe('基础校验测试', () => {
    // 校验失败测试
    test('校验失败测试', async () => {
      const wrapper = mount({
        template: `
        <ne-form :model="model" :rules="rules" ref="formRef">
          <ne-form-item label="用户名" prop="username">
            <ne-input v-model="model.username" />
          </ne-form-item>
        </ne-form>
      `,
        components: {
          'ne-form': Form,
          'ne-form-item': FormItem,
          'ne-input': Input
        },
        data() {
          return {
            model: { username: '' },
            rules: {
              username: [
                { required: true, message: '用户名不能为空', trigger: 'blur' }
              ]
            }
          }
        }
      })

      await nextTick()
      const formRef = wrapper.findComponent({ ref: 'formRef' })

      // 校验应该失败
      await formRef.vm.validate((isValid: boolean) => {
        expect(isValid).toBe(false)
      })
    })

    // 校验成功测试
    test('校验成功测试', async () => {
      const wrapper = mount({
        template: `
        <ne-form :model="model" :rules="rules" ref="formRef">
          <ne-form-item label="用户名" prop="username">
            <ne-input v-model="model.username" />
          </ne-form-item>
        </ne-form>
      `,
        components: {
          'ne-form': Form,
          'ne-form-item': FormItem,
          'ne-input': Input
        },
        data() {
          return {
            model: { username: 'test' },
            rules: {
              username: [
                { required: true, message: '用户名不能为空', trigger: 'blur' }
              ]
            }
          }
        }
      })

      await nextTick()
      const formRef = wrapper.findComponent({ ref: 'formRef' })

      // 校验应该成功
      await formRef.vm.validate((isValid: boolean) => {
        expect(isValid).toBe(true)
      })
    })

    // 校验指定表单项
  })

  // 创建表单组件的辅助函数
  const createWrapper = () => {
    return mount({
      template: `
        <ne-form :model="model" :rules="rules" ref="formRef">
          <ne-form-item label="用户名" prop="username" ref="usernameItem">
            <ne-input v-model="model.username" />
          </ne-form-item>
          <ne-form-item label="邮箱" prop="email" ref="emailItem">
            <ne-input v-model="model.email" />
          </ne-form-item>
        </ne-form>
      `,
      components: {
        'ne-form': Form,
        'ne-form-item': FormItem,
        'ne-input': Input
      },
      data() {
        return {
          model: { username: '', email: '' },
          rules: {
            username: [
              { required: true, message: '用户名不能为空', trigger: 'blur' }
            ],
            email: [
              { required: true, message: '邮箱不能为空', trigger: 'change' }
            ]
          }
        }
      }
    })
  }

  // 清除校验状态方法测试
  describe('清除校验状态方法测试', () => {
    // 表单清除校验状态
    test('表单清除校验状态', async () => {
      const wrapper = createWrapper()

      await nextTick()
      const formRef = wrapper.findComponent({ ref: 'formRef' })
      const usernameItem = wrapper.findComponent({ ref: 'usernameItem' })
      const emailItem = wrapper.findComponent({ ref: 'emailItem' })

      // 先进行校验，预期校验失败
      try {
        await formRef.vm.validate()
      } catch {
        // 校验失败是预期的
      }
      expect(usernameItem.vm.validateStatus).toBe('error')
      expect(emailItem.vm.validateStatus).toBe('error')

      // 清除所有校验状态
      formRef.vm.clearValidate()
      await nextTick()

      // 验证清除成功 - 所有表单项的校验状态应该被重置
      expect(usernameItem.vm.validateStatus).toBe('')
      expect(emailItem.vm.validateStatus).toBe('')
    })

    // 表单清除指定表单项校验状态
    test('表单清除指定表单项校验状态', async () => {
      const wrapper = createWrapper()

      await nextTick()
      const formRef = wrapper.findComponent({ ref: 'formRef' })
      const usernameItem = wrapper.findComponent({ ref: 'usernameItem' })
      const emailItem = wrapper.findComponent({ ref: 'emailItem' })

      // 先进行校验，预期校验失败
      try {
        await formRef.vm.validate()
      } catch {
        // 校验失败是预期的
      }

      // 只清除用户名字段的校验状态
      formRef.vm.clearValidate(['username'])
      await nextTick()

      // 验证只有用户名字段的校验状态被清除
      expect(usernameItem.vm.validateStatus).toBe('')
      expect(emailItem.vm.validateStatus).toBe('error')
    })
  })

  // 重置表单状态方法测试
  describe('重置表单状态方法测试', () => {
    // 重置表单测试
    test('重置表单', async () => {
      const wrapper = createWrapper() as any

      await nextTick()
      const formRef = wrapper.findComponent({ ref: 'formRef' })
      const usernameItem = wrapper.findComponent({ ref: 'usernameItem' })
      const emailItem = wrapper.findComponent({ ref: 'emailItem' })

      // 修改表单数据
      wrapper.vm.model.username = 'ChangeUserName'
      wrapper.vm.model.email = 'ChangeEmail'
      await nextTick()

      // 验证数据已经改变
      expect(wrapper.vm.model.username).toBe('ChangeUserName')
      expect(wrapper.vm.model.email).toBe('ChangeEmail')

      // 触发校验
      await formRef.vm.validate()

      // 重置表单
      formRef.vm.resetFields()
      await nextTick()

      // 验证数据被重置到初始值
      expect(wrapper.vm.model.username).toBe('')
      expect(wrapper.vm.model.email).toBe('')

      // 验证校验状态也被清除
      expect(usernameItem.vm.validateStatus).toBe('')
      expect(emailItem.vm.validateStatus).toBe('')
    })

    // 重置指定表单项测试
    test('重置指定表单项', async () => {
      const wrapper = createWrapper() as any

      await nextTick()
      const formRef = wrapper.findComponent({ ref: 'formRef' })
      const usernameItem = wrapper.findComponent({ ref: 'usernameItem' })
      const emailItem = wrapper.findComponent({ ref: 'emailItem' })

      // 修改表单数据
      wrapper.vm.model.username = 'ChangeUserName'
      wrapper.vm.model.email = 'ChangeEmail'
      await nextTick()

      // 验证数据已经改变
      expect(wrapper.vm.model.username).toBe('ChangeUserName')
      expect(wrapper.vm.model.email).toBe('ChangeEmail')

      // 触发校验
      await formRef.vm.validate()

      // 只重置用户名字段
      formRef.vm.resetFields(['username'])
      await nextTick()

      // 验证校验状态也被清除
      expect(usernameItem.vm.validateStatus).toBe('')
      expect(emailItem.vm.validateStatus).toBe('success')

      // 验证只有用户名被重置
      expect(wrapper.vm.model.username).toBe('')
      expect(wrapper.vm.model.email).toBe('ChangeEmail')
    })
  })
})
