// 格式化用户上传文件的文件类型
export interface UploadFile {
  uid: number
  name: string
  url?: string // URL.createObjectURL()
  percent?: number
  raw?: File // 原始文件
  size?: number //上传文件大小
  status: string // 上传状态
}

export type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

export type UploadFiles = UploadFile[]

export type UploadRawFile = File & { uid: number }

export type UploadProgressEvent = ProgressEvent & { percent: number }

export interface UploadOptions {
  action: string
  file: File
  name: string
  method: string
  headers: Headers | Record<string, string>
  data: Record<string, unknown>
  onSuccess: (response: any) => void
  onError: (error: Error) => void
  onProgress: (event: UploadProgressEvent) => void
}
