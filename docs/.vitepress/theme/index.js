import DefaultTheme from 'vitepress/theme'
import NeUI from '@ne-ui/components/index.ts'
import '@ne-ui/theme-chalk/src/index.scss'
import 'vitepress-demo-plugin/dist/style.css'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(NeUI)
    app.component('demo-preview', AntDesignContainer)
  }
}
