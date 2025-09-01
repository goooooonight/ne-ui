import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import {
  componentPreview,
  containerPreview
} from '@vitepress-demo-preview/plugin'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  // 开发环境无需使用
  //   base: '/FanUI/',
  title: 'ne-ui',
  description: 'ne-ui',
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        // 配置 demo 文件指定目录
        demoDir: path.resolve(__dirname, '../demos')
      })
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  themeConfig: {
    logo: '../public/logo.png',
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/goooooonight',
        activeMatch: ''
      },
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components/icon', activeMatch: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Basic基础组件',
          items: [
            { text: 'Icon', link: '/components/icon' },
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        }
      ]
    }
  }
}
