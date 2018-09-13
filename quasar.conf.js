// Configuration for your app

const path = require('path')

const extendTypescriptToWebpack = (config) => {
  config.resolve
    .extensions
      .add('.ts')
  config.module
    .rule('typescript')
      .test(/\.tsx?$/)
      .use('typescript')
        .loader('ts-loader')
        .options({
          appendTsSuffixTo: [/\.vue$/],
          onlyCompileBundledFiles: true
        })
}

module.exports = function (ctx) {
  return {
    sourceFiles: {
      router: 'src/router/index.ts',
      store: 'src/store/index.ts'
    },
    // app plugins (/src/plugins)
    plugins: [
      'i18n'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      'fontawesome'
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      vueCompiler: true,
      gzip: true,
      analyze: true,
      // extractCSS: false,
      chainWebpack (config) {
        extendTypescriptToWebpack(config)
        config.resolve
          .alias
            .set('~', __dirname)
            .set('@', path.resolve(__dirname, 'src'))
        config.module
          .rule('template-engine')
            .test(/\.pug$/)
            .use('pug')
              .loader('pug-plain-loader')
      }
    },
    devServer: {
      https: false,
      port: 8081,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnDropdown',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemSeparator',
        'QItemMain',
        'QItemSide',
        'QItemTile',
        'QChip'
      ],
      directives: [
        'Ripple',
        'CloseOverlay'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'Meta',
        'Cookies'
      ]
    },
    animations: [],
    ssr: {
      pwa: {
        runtimeCaching: [
          {
            urlPattern: '/statics',
            handler: 'networkFirst'
          }
        ]
      }
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'Quasar PWA',
        short_name: 'Quasar PWA',
        description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    }
  }
}
