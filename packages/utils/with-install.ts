import { type App, type Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends { name?: string }>(comp: T) {
  const install = (app: App) => {
    if (comp.name) {
      app.component(comp.name, comp)
    }
  }

  return Object.assign(comp, { install }) as SFCWithInstall<T>
}

/**
 * 为函数添加install方法，同时注册组件到全局
 * @param fn - 函数式API
 * @param name - 全局属性名
 * @param comp - 对应的Vue组件（可选）
 */
export function withInstallFunction<T extends object>(
  fn: T,
  name: string,
  comp?: any
) {
  const install = (app: App) => {
    // 将函数挂载到全局属性
    app.config.globalProperties[name] = fn

    // 如果提供了组件，也注册组件
    if (comp && comp.name) {
      app.component(comp.name, comp)
    }
  }

  return Object.assign(fn, { install }) as T & Plugin
}
