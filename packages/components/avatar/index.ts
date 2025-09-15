import { withInstall } from '@ne-ui/utils/with-install'
import _Avatar from './src/Avatar.vue'

export const NeAvatar = withInstall(_Avatar)

declare module 'vue' {
  export interface GlobalComponents {
    NeAvatar: typeof NeAvatar
  }
}
