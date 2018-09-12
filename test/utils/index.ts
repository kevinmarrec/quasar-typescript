import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Quasar, { Cookies } from 'quasar'
import Vue, { ComponentOptions } from 'vue'

const mockSsrContext = () => {
  return {
    req: {
      headers: {}
    },
    res: {
      setHeader: () => {}
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Quasar)

export const mountQuasar = (component, { cookies, plugins, ssr }) => {
  const app: ComponentOptions<Vue> = {}
  const store = new Vuex.Store({})
  const router = new VueRouter()
  const ssrContext = ssr ? mockSsrContext() : null

  if (cookies) {
    const cookieStorage = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies
    Object.keys(cookies).forEach(key => {
      cookieStorage.set(key, cookies[key])
    })
  }

  if (plugins) {
    plugins.forEach(plugin => {
      plugin({ app, store, Vue: localVue, ssrContext })
    })
  }

  return mount(component, {
    localVue: localVue,
    store,
    router,
    i18n: app.i18n,
    // Injections for Components with a QPage root Element
    provide: {
      pageContainer: true,
      layout: {
        header: {},
        right: {},
        footer: {},
        left: {}
      }
    }
  })
}
