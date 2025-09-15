import type { InjectionKey, Ref } from 'vue'
import type { Shape, Size } from './type'

/**
 * AvatarGroup上下文类型定义
 */
export interface AvatarGroupContext {
  /** 头像形状 */
  shape: Ref<Shape>
  /** 尺寸 */
  size: Ref<Size | number>
}

/**
 * AvatarGroup注入键
 * 用于在AvatarGroup和Avatar组件之间进行类型安全的依赖注入
 */
export const avatarGroupKey: InjectionKey<AvatarGroupContext> =
  Symbol('avatarGroup')
