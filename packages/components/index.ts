import * as components from './components.ts'
import { type App } from 'vue'

// const FUNCTION_COMP = ['TMessage']
// const DIRECTIVE_COMP = ['FLoading']

const FUNCTION_COMP: string[] = []
const DIRECTIVE_COMP: string[] = []

export * from './components'

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    if (!FUNCTION_COMP.includes(key)) app.component(key, value)
    if (DIRECTIVE_COMP.includes(key)) {
      app.use(value)
    }
  })
}

export * from './components'
export default install
