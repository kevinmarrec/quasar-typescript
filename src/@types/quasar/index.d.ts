declare module 'quasar' {
  import { PluginObject } from 'vue'

  export const Cookies: any
  export const QItem: any

  export const Quasar: PluginObject<{}>
  export default Quasar
}

declare module 'quasar/types' {
  import Vue, { VueConstructor, ComponentOptions } from 'vue'
  import VueRouter from 'vue-router';
  import { Store } from 'vuex';

  export interface QuasarSsrContext {
    req: {
      headers: Object
    },
    res: {
      setHeader(name: string, value: string): void
    }
  }

  export interface QuasarPluginParams {
    app: ComponentOptions<Vue>,
    Vue: VueConstructor<Vue>,
    store: Store<{}>
    router: VueRouter,
    ssrContext: QuasarSsrContext | null | undefined
  }

  export type QuasarPlugin = (params: QuasarPluginParams) => void
}
