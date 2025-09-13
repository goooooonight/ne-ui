import { withInstall } from '@ne-ui/utils/with-install'
import _Checkbox from './src/Checkbox.vue'

export const NeCheckbox = withInstall(_Checkbox)

declare module 'vue' {
  export interface GlobalComponents {
    NeCheckbox: typeof NeCheckbox
  }
}

// export * from './src/button'

export default NeCheckbox
