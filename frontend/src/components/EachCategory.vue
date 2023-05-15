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
        categoryRecipes: null
      }
    }
  }
</script>

<template>
  <div>
    <h1>{{ $route.params.catName }}</h1>
  </div>

  <div class="recipeContainer">
    <div
      class="theRecipe"
      v-for="recipes in OneCategory"
      :key="recipes.recipeCategoryId"
    >

    <router-link :to="`/recipe/${recipes.recipeId}`"> 
      <img :src="recipes.recipeImage" :alt="recipes.recipeName" />
      <h2>{{ recipes.recipeName }}</h2>
     </router-link>
     
    </div>
  </div>
</template>

<style scoped>
  h1,
  h2 {
    text-align: center;
    padding: 10px;
  }

  .recipeContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .theRecipe {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  img {
    height: 250px;
    padding: 15px;
    width: 350px;
    margin-top: 20px;
  }
</style>
