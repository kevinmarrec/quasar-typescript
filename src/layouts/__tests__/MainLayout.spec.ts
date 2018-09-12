import { mountQuasar } from '~/test/utils'
import i18nPlugin from '@/plugins/i18n'
import MainLayout from '@/layouts/MainLayout.vue'
import { QItem } from 'quasar'

describe('MainLayout.vue', () => {
  test('should render with SSR', () => {
    const layout = mountQuasar(MainLayout, {
      plugins: [i18nPlugin],
      ssr: true
    })
    expect(layout.is(MainLayout)).toBe(true)
  })
  test('should change language on item click', () => {
    const layout = mountQuasar(MainLayout, {
      plugins: [i18nPlugin]
    })
    const btnDropdown = layout.find({ ref: 'selectLanguages' })
    const items = btnDropdown.findAll(QItem)
    expect(items.length).toBe(2)
    items.at(1).trigger('click')
    expect(layout.vm.currentLanguage.code).toBe('fr')
  })
})
