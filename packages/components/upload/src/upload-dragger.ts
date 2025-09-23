export const uploadDraggerEmits = {
  dragUpload: (files: File[]) => Array.isArray(files)
}

export type UploadDraggerEmits = typeof uploadDraggerEmits
