/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { isMobile } from '@/utils'

// pc路由
import PcIndex from '@/pc/index'
import PcHome from '@/pc/home/Home'

// mobile 路由
import MbIndex from '@/mobile/index'
import MbHome from '@/mobile/home/Home'

// pc 懒加载路由
const PcAbout = () => import(/* webpackChunkName: "About" */ '@/pc/about/About.vue')
const PcContactUs = () => import(/* webpackChunkName: "ContactUs" */ '@/pc/contact-us/ContactUs.vue')
const PcPrivacyPolicy = () => import(/* webpackChunkName: "PrivacyPolicy" */ '@/pc/privacy-policy/PrivacyPolicy')
const PcServiceTerms = () => import(/* webpackChunkName: "ServiceTerms" */ '@/pc/service-terms/ServiceTerms')

// mobile 懒加载路由
const MbAbout = () => import(/* webpackChunkName: "About" */ '@/mobile/about/About.vue')
const MbPrivacyPolicy = () => import(/* webpackChunkName: "PrivacyPolicy" */ '@/mobile/privacy-policy/PrivacyPolicy')
const MbServiceTerms = () => import(/* webpackChunkName: "ServiceTerms" */ '@/mobile/service-terms/ServiceTerms')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: isMobile ? PcIndex : PcIndex,
    children: [
      {
        path: '',
        name: 'Home',
        component: isMobile ? PcHome : PcHome
      },
      {
        path: '/contact',
        name: 'ContactUs',
        component: isMobile ? PcContactUs : PcContactUs
      },
      {
        path: '/about',
        name: 'About',
        component: isMobile ? PcAbout : PcAbout
      },
      {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: isMobile ? PcPrivacyPolicy : PcPrivacyPolicy
      },
      {
        path: '/service-terms',
        name: 'ServiceTerms',
        component: isMobile ? PcServiceTerms : PcServiceTerms
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
