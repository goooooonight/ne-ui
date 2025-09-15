import { withInstall } from '@ne-ui/utils/with-install'
import _Avatar from './src/Avatar.vue'
import _AvatarGroup from './src/AvatarGroup.vue'

export const NeAvatar = withInstall(_Avatar)
export const NeAvatarGroup = withInstall(_AvatarGroup)

declare module 'vue' {
  export interface GlobalComponents {
    NeAvatar: typeof NeAvatar
    NeAvatarGroup: typeof NeAvatarGroup
  }
}
