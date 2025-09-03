import { withInstall } from '@ne-ui/utils/with-install'
import _Input from './src/Input.vue'

export const NeInput = withInstall(_Input)

declare module 'vue' {
  export interface GlobalComponents {
    NeInput: typeof NeInput
  }
}

// export * from './src/button'

export default NeInput
