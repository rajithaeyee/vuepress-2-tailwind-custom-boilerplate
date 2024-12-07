import { getDirname, path } from 'vuepress/utils';
import { defaultTheme } from '@vuepress/theme-default';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

const __dirname = getDirname(import.meta.url)

const customTheme = (options) =>{
  return ({
      extends: defaultTheme(options),
      name: 'vuepress-theme-foo',
      define: {
        // __themeConfig__ global variable for client
        __themeConfig__: options.themeConfig,
      },
      // path to the client config of your theme
      clientConfigFile: path.resolve(__dirname, 'client.js'),
      // set custom dev / build template
      // if the template is not specified, the default template
      templateBuild: path.resolve(__dirname, 'templates/build.html'),
      templateDev: path.resolve(__dirname, 'templates/dev.html'),

      // use plugins
      plugins: [
        [
          prismjsPlugin({
            // options
            theme: 'pojoaque'
            
          }),
          copyCodePlugin({
            // options
          }),
        ]
      ],
      // other plugin APIs are also available
        alias: {
      // set alias for replaceable components
      '@theme/Navbar.vue': path.resolve(__dirname, 'components/Navbar/Navbar.vue'),
      '@theme/Sidebar.vue': path.resolve(__dirname, 'components/Sidebar/Sidebar.vue'),
      '@theme/Footer.vue': path.resolve(__dirname, 'components/Footer/Footer.vue')
    },
    })
}

export default customTheme;
