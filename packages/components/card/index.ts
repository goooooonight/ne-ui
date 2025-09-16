import { withInstall } from '@ne-ui/utils/with-install'
import _Card from './src/Card.vue'

export const NeCard = withInstall(_Card)

declare module 'vue' {
  export interface GlobalComponents {
    NeCard: typeof NeCard
  }
}

// export * from './src/card'

export default NeCard
