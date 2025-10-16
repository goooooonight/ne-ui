import { withInstall } from '@ne-ui/utils'
import _Loading from './src/Loading.vue'

export const NeLoading = withInstall(_Loading)

declare module 'vue' {
  export interface GlobalComponents {
    NeLoading: typeof NeLoading
  }
}

export * from './src/loading'

export default NeLoading
