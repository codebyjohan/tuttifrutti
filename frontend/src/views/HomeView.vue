<template>
  <h1>Populära maträtter</h1>
  <div class="grid">
  <div id="recipes" :key="recipe.id" v-for="recipe in recipes">
      <img :src="recipe.recipeImage" alt="Bild på maträtt" />
      <span> {{ recipe.recipeName }} </span>
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
#recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 40px

}
#recipes img {
  padding: 0;
  max-width: 100%;
  width: 300px;
  height: 200px;
  object-fit: cover;
}

</style>

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
      this.recipes= results
      console.log(this.recipes[1].recipeImage)
    })
  }
}
</script>
