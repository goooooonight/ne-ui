import { withInstall } from '@ne-ui/utils/with-install'
import _Button from './src/Button.vue'

export const NeButton = withInstall(_Button)

declare module 'vue' {
  export interface GlobalComponents {
    NeButton: typeof NeButton
  }
}

// export * from './src/button'

export default NeButton
