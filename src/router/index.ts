import Vue from 'vue'
import VueRouter, { RouterMode } from 'vue-router'

import routes from '@/router/routes'

Vue.use(VueRouter)
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => { Promise.resolve({ y: 0 }) },
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: process.env.VUE_ROUTER_MODE as RouterMode,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
