import { RouteConfig } from 'vue-router'

const routes: [RouteConfig] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/Dashboard.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    name: 'pages.errors.e404',
    path: '*',
    component: () => import('@/pages/Error404.vue')
  })
}

export default routes
