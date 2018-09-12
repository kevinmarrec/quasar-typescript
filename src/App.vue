<template lang="pug">
  #q-app
    router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  meta () {
    return {
      titleTemplate: (title: any) => `Quasar TypeScript - ${title}`,
      meta: {
        description: { name: 'description', content: 'Main description' },
        // Define the viewport depending on device (prevent zoom on mobile devices)
        viewport: {
          name: 'viewport',
          content: this.$q.platform.is.desktop
            ? 'width=device-width'
            : 'width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1' +
              (this.$q.platform.is.cordova ? ', viewport-fit=cover' : '')
        }
      }
    }
  }
})
export default class App extends Vue {}
</script>
