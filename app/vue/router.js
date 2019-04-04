import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/profile.vue')
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/search.vue')
    },
    {
      path: '/security',
      name: 'security',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/security.vue')
    },
    {
      path: '/monthly-sales',
      name: 'monthly-sales',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/monthly.vue')
    },
    {
      path: '/qoute-insured-details',
      name: 'qoute-insured-details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/qoute-insured-details.vue')
    },
    {
      path: '/qoute-checkout',
      name: 'qoute-checkout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/qoute-checkout.vue')
    },
    {
      path: '/qoute-cover-details',
      name: 'qoute-cover-details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/qoute-cover-details.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => require(/* webpackChunkName: "about" */ './pages/checkout.vue')
    },
  ]
})
