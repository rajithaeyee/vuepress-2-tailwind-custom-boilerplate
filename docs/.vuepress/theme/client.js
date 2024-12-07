import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'

export default defineClientConfig({
  enhance({ app, siteData, router }) {
    //you can write up the enhance logics here
  },
  layouts: {
    Layout,
    NotFound,
  },
});
