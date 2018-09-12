<template lang="pug">
  q-page.flex.flex-center
    .column.flex-center
      p {{ $t('pages.dashboard.title') }}
</template>

<style>
</style>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator'

@Component({
  meta () {
    return {
      title: 'Dashboard'
    }
  }
})
export default class PageDashboard extends Vue {}
</script>
