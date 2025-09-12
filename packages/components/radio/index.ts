import { withInstall } from '@ne-ui/utils/with-install'
import _Radio from './src/Radio.vue'
import _RadioGroup from './src/RadioGroup.vue'
import _RadioButton from './src/RadioButton.vue'

export const NeRadio = withInstall(_Radio)
export const NeRadioGroup = withInstall(_RadioGroup)
export const NeRadioButton = withInstall(_RadioButton)

declare module 'vue' {
  export interface GlobalComponents {
    NeRadio: typeof NeRadio
    NeRadioGroup: typeof NeRadioGroup
    NeRadioButton: typeof NeRadioButton
  }
}

// export * from './src/button'
