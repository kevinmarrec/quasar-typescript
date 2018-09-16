import { mountQuasar } from '~/test/utils'
import i18nPlugin from '@/plugins/i18n'
import PageError404 from '@/pages/Error404.vue'

describe('Error404.vue', () => {
  test('should render', () => {
    const page = mountQuasar(PageError404, {
      plugins: [i18nPlugin]
    })
    expect(page.is(PageError404)).toBe(true)
  })
})
