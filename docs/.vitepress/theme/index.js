import DefaultTheme from 'vitepress/theme'
import NeUI from '@ne-ui/components/index.ts'
import '@ne-ui/theme-chalk/src/index.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(NeUI)
  }
}
