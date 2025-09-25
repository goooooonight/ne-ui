<script setup lang="ts">
import { ref, computed } from 'vue'
import { createNameSpace } from '@ne-ui/utils'
import { uploadContentProps } from './upload-content'
import type { UploadFile, UploadOptions, UploadRawFile } from './type'
import { ajaxUpload } from './ajax'
import UploadDragger from './UploadDragger.vue'
import NeMessage from '@ne-ui/components/message'
import { generateFileUid } from './upload'

// 创建命名空间
const ns = createNameSpace('upload')

// 获取props
const props = defineProps(uploadContentProps)

// 生成自定义类名
const classCustom = computed(() => {
  return [ns.b(), ns.is('drag', props.drag), ns.is('disabled', props.disabled)]
})

// 绑定原生input ref
const inputRef = ref<HTMLInputElement>()

// 处理上传点击事件
const handleClick = () => {
  // 清空文件选择状态
  inputRef.value!.value = ''
  inputRef.value!.click()
}

// 处理上传文件改变事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    const files = Array.from(target.files)
    uploadFiles(files)
  }
}

// 上传文件
const upload = async (rawFile: UploadRawFile) => {
  // 解构props
  const {
    action,
    name,
    method,
    headers,
    data,
    onBeforeUpload,
    onStart,
    onRemove,
    onSuccess,
    onError,
    onProgress
  } = props

  // 构建上传文件对象
  const uploadFile: UploadFile = {
    uid: rawFile.uid,
    name: rawFile.name,
    size: rawFile.size,
    raw: rawFile,
    status: 'start'
  }

  // 执行上传开始钩子函数
  onStart(uploadFile)

  // 执行文件上传前钩子
  const result = await onBeforeUpload(uploadFile)
  console.log(result)

  // 只有当 result 明确为 false 时才取消上传
  if (typeof result === 'boolean' && result === false) {
    return onRemove(uploadFile)
  }

  // 构建上传配置对象
  const options: UploadOptions = {
    action,
    file: rawFile,
    name,
    method,
    headers: headers || {},
    data: data || {},
    onSuccess: (response) => {
      onSuccess(response, uploadFile)
    },
    onError: (error) => {
      onError(error, uploadFile)
    },
    onProgress: (event) => {
      onProgress(event, uploadFile)
    }
  }

  // 发送请求
  ajaxUpload(options)
}

// 上传文件
const uploadFiles = (files: File[]) => {
  // 判断上传文件数量是否超出限制
  const totalFileCount = props.currentFileCount.value + files.length
  if (props.limit !== undefined && props.limit < totalFileCount) {
    // 弹出警告消息
    NeMessage.warning(
      `您最多可以上传 ${props.limit} 个文件，本次已选择 ${files.length} 个，总数已达 ${totalFileCount} 个`
    )
    return
  }

  // 对files数组进行遍历操作
  files.forEach((file) => {
    // 为传入文件生成uid
    const rawFile = file as UploadRawFile
    rawFile.uid = generateFileUid()

    // 调用上传方法
    upload(rawFile)
  })
}
</script>

<template>
  <div :class="classCustom" @click="handleClick">
    <template v-if="drag">
      <UploadDragger @drag-upload="uploadFiles">
        <slot></slot>
      </UploadDragger>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <input
      type="file"
      ref="inputRef"
      :class="ns.e('input')"
      :multiple="multiple"
      :disabled="disabled"
      @change="handleChange"
    />
  </div>
</template>

<style scoped></style>
