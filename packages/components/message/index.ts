import { withInstall } from '@ne-ui/utils/with-install'
import _Message from './src/Message.vue'

export const NeMessage = withInstall(_Message)

declare module 'vue' {
  export interface GlobalComponents {
    NeMessage: typeof NeMessage
  }
}
