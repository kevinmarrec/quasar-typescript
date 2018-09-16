<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-layout-header
      q-toolbar.row(color="primary", glossy)
        q-toolbar-title.col
          span Quasar TypeScript
          div(slot="subtitle") Quasar v{{ $q.version }}

        q-btn-dropdown(ref="selectLanguages", v-if="hasMultipleLanguages", icon="language", :label="currentLanguage.code", flat, dense)
          q-list(link)
            q-item(v-close-overlay, v-for="(language, index) in availableLanguages", :key="index", @click.native="setLanguage(language.code)")
              q-item-main
                q-item-tile(label) {{ language.name }}
              q-item-side(v-if="language.code === currentLanguage.code", right, icon="done", color="primary")
    q-page-container
      router-view
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator'
import { Mixin as i18nMixin } from '@/plugins/i18n'

@Component
export default class MainLayout extends Mixins(i18nMixin) {}
</script>
