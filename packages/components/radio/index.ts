import { withInstall } from '@ne-ui/utils/with-install'
import _Radio from './src/Radio.vue'
import _RadioGroup from './src/RadioGroup.vue'

export const NeRadio = withInstall(_Radio)
export const NeRadioGroup = withInstall(_RadioGroup)

declare module 'vue' {
  export interface GlobalComponents {
    NeRadio: typeof NeRadio
    NeRadioGroup: typeof NeRadioGroup
  }
}

// export * from './src/button'
