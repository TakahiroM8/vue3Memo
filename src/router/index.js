import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '../views/NewView.vue'
// import AboutView from '../views/AboutView.vue'
// import AaaView from '../views/AaaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/Aaa',
  //   name: 'AaaView',
  //   component: AaaView
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
