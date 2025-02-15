import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasicGSAP from '@/views/BasicGSAP.vue'
import BasicTweens from '@/views/BasicTweens.vue'
import TweenMethods from '@/views/TweenMethods.vue'
import Timeline from '@/views/Timeline.vue'
import ControlMethods from '@/views/ControlMethods.vue'
import GSAPSet from '@/views/GSAPSet.vue'
import Stagger from '@/views/Stagger.vue'
import StaggerSquares from '@/views/StaggerSquares.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/basic-gsap',
      name: 'basic-gsap',
      component: BasicGSAP
    },
    {
      path: '/basic-tweens',
      name: 'basic-tweens',
      component: BasicTweens
    },
    {
      path: '/tween-methods',
      name: 'tween-methods',
      component: TweenMethods
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/control-methods',
      name: 'control-methods',
      component: ControlMethods
    },
    {
      path: '/gsap-set',
      name: 'gsap-set',
      component: GSAPSet
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: Stagger
    },
    {
      path: '/stagger-squares',
      name: 'stagger-squares',
      component: StaggerSquares
    }
  ],
})

export default router
