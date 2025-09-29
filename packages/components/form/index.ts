import { withInstall } from '@ne-ui/utils/with-install'
import _Form from './src/Form.vue'
import _FormItem from './src/FormItem.vue'

export const NeForm = withInstall(_Form)
export const NeFormItem = withInstall(_FormItem)

declare module 'vue' {
  export interface GlobalComponents {
    NeForm: typeof NeForm
    NeFormItem: typeof NeFormItem
  }
}

export * from './src/form'
export * from './src/form-item'
export * from './src/form-key'
export * from './src/form-item-key'

export default NeForm
