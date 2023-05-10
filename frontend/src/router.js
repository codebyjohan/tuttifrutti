import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import recipes from './components/AllRecipes.vue'
import AllCategories from './components/AllCategories.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: recipes,
      path: '/recipes'
    },
    {
      component: AllCategories,
      path: '/categories'
    }
  ]
})
