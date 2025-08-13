import { withInstall } from '@ne-ui/utils/withInstall'
import _Button from './src/index.vue'

export const NeButton = withInstall(_Button)

declare module 'vue' {
  export interface GlobalComponents {
    NeButton: typeof NeButton
  }
}

// export * from './src/button'

export default NeButton
