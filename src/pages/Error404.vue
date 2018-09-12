<template lang="pug">
  .fixed-center.text-center
    img(src="~assets/sad.svg", style="width:30vw;max-width:150px;")
    p.q-mt-sm.text-faded
      | {{ $t('pages.errors.e404.message') }} #[strong (404)]
    q-btn(
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    ) {{ $t('pages.errors.e404.back') }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Error404 extends Vue {}
</script>
