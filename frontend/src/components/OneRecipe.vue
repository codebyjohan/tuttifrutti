<template>
<div>
<div id="title">
<h1>{{ filteredRecipeByID.recipeName }}</h1></div>
<div id="time">
<p><svg id="image" width="17" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 15C12 15 15 12 15 8.33333C15 4.66667 12 1.66667 8.33333 1.66667C4.66667 1.66667 1.66667 4.66667 1.66667 8.33333C1.66667 12 4.66667 15 8.33333 15ZM8.33333 0C12.9167 0 16.6667 3.75 16.6667 8.33333C16.6667 12.9167 12.9167 16.6667 8.33333 16.6667C3.75 16.6667 0 12.9167 0 8.33333C0 3.75 3.75 0 8.33333 0ZM12.5 9.91667L11.9167 11L7.5 8.58333V4.16667H8.75V7.83333L12.5 9.91667Z" fill="black"/>
</svg> {{ filteredRecipeByID.recipeTime }} minuter</p></div>
<div id="foodImage">
<img :src="filteredRecipeByID.recipeImage" alt="En bild på maträtten" /></div>
<!-- <p>{{ filteredIngredientsByID.ingredientsName }}</p> -->
<div id="instructions">
<p id="recipeIng">{{ filteredRecipeByID.recipeInstructions }}</p></div>
</div>
<div id="commentSection">
<label>
  Skriv en kommentar:
  <input id="textField" type="text" />
</label>
<button id="submitBtn" type="submit">Submit</button></div>
</template>

<script>
export default{
  computed: {
      filteredRecipeByID() {
        if (this.recipes === null) {
          return []
        }
        return this.recipes.find((recipe) => recipe.id == this.$route.params.recipeId)
      }},
      // filteredIngredientsByID() {
      //   if (this.ingredients === null) {
      //     return []
      //   }
      //   return this.ingredients.find((recipe) => recipe.id == this.$route.params.Id)
      // },
data(){
  return {recipes: null
    // ingredients: null
}},
created(){
  fetch("http://localhost:3000/recipe").then((response) => {
    return response.json()
  }).then((result) =>{
    console.log(result)
    this.recipes = result;
  })
  // fetch("http://localhost:3000/hejsan").then((response) => {
  //   return response.json()
  // }).then((result) =>{
  //   console.log(result)
  //   this.ingredients = result;
  // })
}}
  </script>

<style scoped>
#title{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
#time{
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}
#foodImage{
  display: flex;
  justify-content: center;
}
img{
width: 300px;
height: 300px;
padding: 0;
object-fit: cover;
}
#instructions{
  display: flex;
  justify-content: center;

}
#recipeIng{
  margin-top: 8px;
  margin-bottom: 10px;
  width: 290px;
}
#commentSection{
  display: flex;
  justify-content: center;
}

</style>
