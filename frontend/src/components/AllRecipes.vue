<script>
  import axios from 'axios'
  export default {
    created() {
      axios.get('http://localhost:3000/recipe').then((result) => {
        this.recipes = result.data
        // console.log(result.data)
      })
    },
    data() {
      return {
        recipes: null
      }
    }
  }
</script>

<template>
  <h1>RECEPT</h1>

  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="`/recipe/${recipe.recipeId}`">
        <img :src="recipe.recipeImage" :alt="recipe.recipeName" />
      </router-link>
      <h2>{{ recipe.recipeName }}</h2>
      <h3>{{ recipe.recipeTime }} Min</h3>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h2,
  h3 {
    text-align: center;
  }

  img {
    width: 350px;
    height: 250px;
    padding-bottom: 5px;
  }

  .recipes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .recipe {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }
</style>
