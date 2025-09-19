import { withInstallFunction } from '@ne-ui/utils/with-install'
import _Message from './src/Message.vue'
import Message from './src/message-service'

export const NeMessage = withInstallFunction(Message, '$message', _Message)

declare module 'vue' {
  export interface GlobalComponents {
    NeMessage: typeof _Message
  }
}

export * from './src/message'
export default NeMessage
