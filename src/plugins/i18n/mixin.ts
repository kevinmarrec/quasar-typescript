import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import config from '@/config'

@Component
export default class Mixin extends Vue {
  hasMultipleLanguages: boolean = config.i18n.languages.filter(l => l.active).length > 1
  get currentLanguage () {
    return config.i18n.languages.find(l => l.code === this.$store.getters.getLocale)
  }
  get availableLanguages () {
    return [this.currentLanguage].concat(config.i18n.languages.filter(l => l !== this.currentLanguage && l.active))
  }
  @Action setLanguage: any
}

declare module 'vue/types/vue' {
  interface Vue {
    currentLanguage: any
    availableLanguages: Array<any>,
    setLanguage (code: string): any
  }
}
