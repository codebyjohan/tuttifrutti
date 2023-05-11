<template>
  <div>
    <h1>{{ $route.params.catName }}</h1>
  </div>

  <div v-for="recipes in OneCategory" :key="recipes.recipeCategoryId">
    {{ recipes.recipeName }}
    <img :src="recipes.recipeImage" :alt="recipes.recipeName" />
  </div>
</template>

<script>
  export default {
    created() {
      fetch('http://localhost:3000/category_recipes')
        .then((res) => res.json())
        .then((data) => {
          this.categoryRecipes = data
        })
    },
    computed: {
      OneCategory() {
        if (this.categoryRecipes === null) {
          return []
        } else {
          return this.categoryRecipes.filter(
            (categories) =>
              categories.categoryName === this.$route.params.catName
          )
        }
      }
    },
    data() {
      return {
        categoryRecipes: ''
      }
    }
  }
</script>
