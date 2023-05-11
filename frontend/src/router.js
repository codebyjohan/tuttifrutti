import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import recipes from './components/AllRecipes.vue'
import addRecipe from './components/AddRecipe.vue'
import recipe from './components/OneRecipe.vue'
import AllCategories from './components/AllCategories.vue'
import Category from './components/EachCategory.vue'

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
      component: addRecipe,
      path: '/addrecipes'
    },
    {
      component: recipe,
      path: '/recipe/:id'
    },
    {
      component: AllCategories,
      path: '/categories'
    },
    {
      component: Category,
      path: '/categories/:catName'
    }
  ]
})
