<script>
export default {
  data() {
    return {
      recipes: '',
      recipename:'',
      recipepic: ''
    }
  },
  created() {
    fetch('http://localhost:3000/recipe')
    .then((res) => res.json())
    .then((results) => {
      this.recipes= results.slice(0,3)
      console.log(this.recipes[1].recipeImage)
    })
  }
}
</script>

<template>
  <h1>Populära maträtter</h1>
  <div class="grid">
  <div id="recipes" :key="recipe.id" v-for="recipe in recipes">
    <router-link :to="`/recipe/${recipe.recipeId}`">
      <img :src="recipe.recipeImage" alt="Bild på maträtt" />
      <span> {{ recipe.recipeName }} </span>
    </router-link>
  </div>
</div>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.grid {
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-top: 200px;
}
#recipes, a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px

}
a:hover {
  color: rgb(59, 56, 56);
  text-decoration: underline;
}
#recipes img {
  padding: 0;
  max-width: 100%;
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>
