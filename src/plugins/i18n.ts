import VueI18n from 'vue-i18n'
import { Cookies } from 'quasar'

import config from '@/config'
import messages from '@/i18n'

export default ({ app, store, Vue, ssrContext }) => {
  Vue.use(VueI18n)

  const cookies = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies
  const currentLocale = cookies.get('locale') || config.i18n.default

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: currentLocale,
    fallbackLocale: config.i18n.fallbackTo,
    messages
  })

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
        app.i18n.locale = code
      }
    }
  })
}

import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export class Mixin extends Vue {
  hasMultipleLanguages = config.i18n.languages.filter(l => l.active).length > 1
  get currentLanguage () {
    return config.i18n.languages.find(l => l.code === this.$store.getters.getLocale)
  }
  get availableLanguages () {
    return [this.currentLanguage].concat(config.i18n.languages.filter(l => l !== this.currentLanguage && l.active))
  }
  @Action setLanguage
}
