import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category/:selectionId/topicList/:categoryId',
    name: 'topicList',
    component: () => import('../views/TopicListView.vue')
  },
  {
    path: '/category/:selectionId',
    name: 'category',
    component: () => import('../views/CategoryView.vue')
  },
  {
    path: '/category/:selectionId/topicList/:categoryId/shuffle',
    name: 'shuffle',
    component: () => import('../views/ShuffleView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
