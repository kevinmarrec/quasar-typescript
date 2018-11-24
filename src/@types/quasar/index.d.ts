declare module 'quasar' {
import { PluginObject } from 'vue'

export const Cookies: any

// Components
export const QActionSheet: any
export const QAjaxBar: any
export const QAlert: any
export const QAutocomplete: any
export const QBreadcrumbs: any
export const QBreadcrumbsEl: any
export const QBtn: any
export const QBtnGroup: any
export const QBtnDropdown: any
export const QBtnToggle: any
export const QCard: any
export const QCardTitle: any
export const QCardMain: any
export const QCardActions: any
export const QCardMedia: any
export const QCardSeparator: any
export const QCarousel: any
export const QCarouselSlide: any
export const QCarouselControl: any
export const QChatMessage: any
export const QCheckbox: any
export const QChip: any
export const QChipsInput: any
export const QCollapsible: any
export const QColor: any
export const QColorPicker: any
export const QContextMenu: any
export const QDatetime: any
export const QDatetimePicker: any
export const QDialog: any
export const QEditor: any
export const QFab: any
export const QFabAction: any
export const QField: any
export const QIcon: any
export const QInfiniteScroll: any
export const QInnerLoading: any
export const QInput: any
export const QInputFrame: any
export const QJumbotron: any
export const QKnob: any
export const QLayout: any
export const QLayoutDrawer: any
export const QLayoutFooter: any
export const QLayoutHeader: any
export const QPage: any
export const QPageContainer: any
export const QPageSticky: any
export const QItem: any
export const QItemSeparator: any
export const QItemMain: any
export const QItemSide: any
export const QItemTile: any
export const QItemWrapper: any
export const QList: any
export const QListHeader: any
export const QModal: any
export const QModalLayout: any
export const QNoSsr: any
export const QResizeObservable: any
export const QScrollObservable: any
export const QWindowResizeObservable: any
export const QOptionGroup: any
export const QPagination: any
export const QParallax: any
export const QPopover: any
export const QPopupEdit: any
export const QProgress: any
export const QPullToRefresh: any
export const QRadio: any
export const QRange: any
export const QRating: any
export const QScrollArea: any
export const QSearch: any
export const QSelect: any
export const QSlideTransition: any
export const QSlider: any
export const QSpinner: any
export const QSpinnerAudio: any
export const QSpinnerBall: any
export const QSpinnerBars: any
export const QSpinnerCircles: any
export const QSpinnerComment: any
export const QSpinnerCube: any
export const QSpinnerDots: any
export const QSpinnerFacebook: any
export const QSpinnerGears: any
export const QSpinnerGrid: any
export const QSpinnerHearts: any
export const QSpinnerHourglass: any
export const QSpinnerInfinity: any
export const QSpinnerIos: any
export const QSpinnerMat: any
export const QSpinnerOval: any
export const QSpinnerPie: any
export const QSpinnerPuff: any
export const QSpinnerRadio: any
export const QSpinnerRings: any
export const QSpinnerTail: any
export const QStep: any
export const QStepper: any
export const QStepperNavigation: any
export const QRouteTab: any
export const QTab: any
export const QTabPane: any
export const QTabs: any
export const QTable: any
export const QTh: any
export const QTr: any
export const QTd: any
export const QTableColumns: any
export const QTimeline: any
export const QTimelineEntry: any
export const QToggle: any
export const QToolbar: any
export const QToolbarTitle: any
export const QTooltip: any
export const QTree: any
export const QUploader: any
export const QVideo: any
// End Components

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
