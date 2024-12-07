import { getDirname, path } from 'vuepress/utils'
 const __dirname = getDirname(import.meta.url)
import customTheme from './theme';
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "Vuepress Custom Template",
  bundler: viteBundler({
    viteOptions: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '',
            },
          },
            postcss: {
                plugins: [
                    autoprefixer(),
                    tailwindcss()
                ]
            }
        }
    }
    }),
  base: "/",
  theme: customTheme(
    {
      themeConfig: {
        sidebar: {
        '/': [
          '/getting-started/introduction',
        ],
        },
    },
    }
  ),
})
