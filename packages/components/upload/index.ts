import { withInstall } from '@ne-ui/utils/with-install'
import _Upload from './src/Upload.vue'

export const NeUpload = withInstall(_Upload)

declare module 'vue' {
  export interface GlobalComponents {
    NeUpload: typeof NeUpload
  }
}

export * from './src/upload'

export default NeUpload
