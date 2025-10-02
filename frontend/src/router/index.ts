import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: HomeView, meta: { public: true } }],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // back/forward button restores position
    }

    if (to.meta.public) {
      return { top: 0 } // public routes → scroll to top
    }

    // for dashboard/admin routes → keep current position
    return {}
  },
})

export default router
