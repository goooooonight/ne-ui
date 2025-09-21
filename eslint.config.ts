import { globalIgnores } from 'eslint/config'
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  },
  skipFormatting,
  // 我的修改
  {
    plugins: {
      // 插件名作为键，值为插件模块（通过 import 引入）
      prettier: prettierPlugin
    },
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        MouseEvent: 'readonly',
        FocusEvent: 'readonly',
        Event: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLDivElement: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        File: 'readonly'
      }
    },
    rules: {
      // 使用插件提供的规则（格式：`插件名/规则名`）
      'prettier/prettier': 'error',

      // 黑马文档部分额外规则
      'vue/multi-word-component-names': 'off', // 关闭vue组件名称多单词组成的检查
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
      '@typescript-eslint/no-explicit-any': 'off', // 关闭 any 类型报错
      // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭，这里加上是为了支持下一个章节演示。
      'no-undef': 'error'
    }
  },
  eslintConfigPrettier
)
