import { withInstall } from '@ne-ui/utils/with-install'
import _Radio from './src/Radio.vue'

export const NeRadio = withInstall(_Radio)

declare module 'vue' {
  export interface GlobalComponents {
    NeRadio: typeof NeRadio
  }
}

// export * from './src/button'

export default NeRadio
