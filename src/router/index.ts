import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/featured',
      name: 'featured',
      component: () => import('../views/FeatureView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import('../views/ProfileView.vue'),
    // },
    // {
    //   path: '/settings',
    //   name: 'settings',
    //   component: () => import('../views/SettingsView.vue'),
    // },
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   component: () => import('../views/EditorView.vue'),
    // },
    // {
    //   path: '/article/:slug',
    //   name: 'article',
    //   component: () => import('../views/ArticleView.vue'),
    // },
  ],
})

export default router
