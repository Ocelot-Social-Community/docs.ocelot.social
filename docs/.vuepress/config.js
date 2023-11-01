import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { hopeTheme } from 'vuepress-theme-hope'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'

export default defineUserConfig({
  title: 'Ocelot.social Documentation',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: hopeTheme({
    favicon: '/favicon.ico',
    logo: '/logo.svg',
    docsRepo: 'https://github.com/Ocelot-Social-Community/Ocelot-Social',
    docsBranch: 'master',
    editLink: true,
    lastUpdated: false,
    contributors: false,
    navbar: [
      { text: 'Ocelot.social Documentation', link: '/' },
      {
        text: 'Github',
        link: 'https://github.com/Ocelot-Social-Community/Ocelot-Social'
      },
    ],
  }),
  plugins: [
    searchProPlugin({
      indexContent: true,
      autoSuggestions: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }),
    mdEnhancePlugin({
      tabs: true,
    }),
  ],
})