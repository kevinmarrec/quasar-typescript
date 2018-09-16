import VueI18n from 'vue-i18n'
import { Cookies } from 'quasar'

import config from '@/config'
import messages from '@/i18n'

import { QuasarPluginParams, QuasarPlugin } from 'quasar/types'

const plugin: QuasarPlugin = ({ app, store, Vue, ssrContext }: QuasarPluginParams) => {
  Vue.use(VueI18n)

  const cookies = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies
  const currentLocale: string = cookies.get('locale') || config.i18n.default

  const i18n = new VueI18n({
    locale: currentLocale,
    fallbackLocale: config.i18n.fallbackTo,
    messages
  })

  // Set i18n instance on app
  app.i18n = i18n

  // Register Store Module
  store.registerModule('i18n', {
    state: {
      locale: currentLocale
    },
    getters: {
      getLocale: (state) => state.locale
    },
    mutations: {
      setLocale (state, code) {
        state.locale = code
      }
    },
    actions: {
      setLanguage ({ commit }, code) {
        cookies.set('locale', code)
        commit('setLocale', code)
        i18n.locale = code
      }
    }
  })
}

export default plugin
