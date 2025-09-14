import { withInstall } from '@ne-ui/utils/with-install'
import _Checkbox from './src/Checkbox.vue'
import _CheckboxGroup from './src/CheckboxGroup.vue'

export const NeCheckbox = withInstall(_Checkbox)
export const NeCheckboxGroup = withInstall(_CheckboxGroup)

declare module 'vue' {
  export interface GlobalComponents {
    NeCheckbox: typeof NeCheckbox
    NeCheckGroup: typeof NeCheckboxGroup
  }
}
