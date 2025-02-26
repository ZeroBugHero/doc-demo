import {defineConfig} from '@sugarat/theme/node'
import {nav} from './relaConf'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'


// 导入主题的配置
import {blogTheme} from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = process.env.GITHUB_ACTIONS === 'true'
  ? '/doc-demo/'
  : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
    // 继承博客主题(@sugarat/theme)
    ignoreDeadLinks: true,
    extends: blogTheme,
    base,
    lang: 'zh-cn',
    title: '测试知识',
    titleTemplate: "记录工作中学习到的测试相关知识",
    description: '记录工作中学习到的测试相关知识',
    lastUpdated: true,
    // 详见：https://vitepress.dev/zh/reference/site-config#head
    head: [
        // 配置网站的图标（显示在浏览器的 tab 上）
        // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
        ['link', {rel: 'icon', href: '/logo.svg'}]
    ],

    markdown: {
        lineNumbers: true,
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        // 展示 2,3 级标题在目录中
        // outline: {
        //   level: [2, 3],
        //   label: '目录'
        // },
        // 默认文案修改
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '相关文章',
        // lastUpdatedText: '上次更新于',
        lastUpdated:{
            text:'上次更新于',
        },

        // 设置logo
        logo: '/logo.svg',
        // editLink: {
        //   pattern:
        //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
        //   text: '去 GitHub 上编辑内容'
        // },
        nav: nav,
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/ZeroBugHero'
            }
        ]
    },
    vite:{
        plugins: [
            groupIconVitePlugin()
        ],
    }
})
