<script>
export default {

    created() {
      fetch('http://localhost:3000/categoryName')
        .then((res) => res.json())
        .then((data) => {
          this.category = data
        })
    },

    // computed: {
    //   meatRecipe() {
    //     if (this.category === null) {
    //       return []
    //     }
    //     return this.category.filter((categoryName) => category.categoryName === 'Kött')
    //   },

    //   chickenRecipe() {
    //     if (this.category === null) {
    //       return []
    //     }
    //     return this.category.filter((categoryName) => category.categoryName === 'Kyckling')
    //   },

    //   fishRecipe() {
    //     if (this.category === null) {
    //       return []
    //     }
    //     return this.category.filter((categoryName) => category.categoryName === 'Fisk')
    //   },

    data() {
      return {
        category: null
      }
    }
  }
// }
</script>

<template>
  <h1>{{ $route.params.categoryName }}</h1>
  <!-- <div >
    <ol>
      <li :key="cat.categoryName" v-for="cat in category">
        {{ recipe.recipeName }}
    </li>
</ol>
</div>
<div>
<router-link
  v-for="recipe in meatRecipe"
  :key="recipe.recipeName"
  :to="`/category/${category.id}`"
>
  <img :src="recipe.image" :alt="recipe.name" />
  {{ recipe.name }} <br />
  </div> -->
</template>