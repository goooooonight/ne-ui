import { withInstall } from '@ne-ui/utils/with-install'
import _Icon from './src/Icon.vue'

export const NeIcon = withInstall(_Icon)

declare module 'vue' {
  export interface GlobalComponents {
    NeIcon: typeof NeIcon
  }
}

// export * from './src/button'

export default NeIcon
