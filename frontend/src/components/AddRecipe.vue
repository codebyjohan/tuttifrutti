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
        recipes: null,
        name: '',
        instructions: '',
        time: '',
        url: '',
        category: '1',
        selectedRecId: '',
        recipeMessage: false,
        categoryMessage: false
      }
    },
    methods: {
      submitRecipe() {
        axios
          .post('http://localhost:3000/recipe', {
            recipeName: this.name,
            recipeInstructions: this.instructions,
            recipeTime: this.time,
            recipeImage: this.url
          })
          .then((response) => {
            this.response = JSON.stringify(response)
          })
      },
      connectCategory() {
        axios
          .post('http://localhost:3000/recipeCategory', {
            recipeCategoryCatId: this.category,
            recipeCategoryRecId: this.selectedRecId
          })
          .then((response) => {
            this.response = JSON.stringify(response)
          })
      },
      submitRecipeMessage() {
        this.recipeMessage = true
      },
      submitCategoryMessage() {
        this.categoryMessage = true
      }
    }
  }
</script>

<template>
  <h1>Lägg till ett nytt recept</h1>

  <form @submit.prevent="submitRecipe">
    <div class="flex">
      <label for="name">Namn:</label>
      <input id="name" type="text" v-model="name" required />

      <label for="instructions">Instruktioner:</label>
      <input id="instructions" type="text" v-model="instructions" required />

      <label for="time">Tillagningstid:</label>
      <input id="time" type="text" v-model="time" required />

      <label for="url">Bild Url:</label>
      <input id="url" type="text" v-model="url" required />

      <button type="submit" @click="submitRecipeMessage()">
        Skicka ditt recept!
      </button>
    </div>
  </form>
  <h4 v-if="recipeMessage">Ditt recept har skapats!</h4>

  <br />

  <form @submit.prevent="connectCategory">
    <label>Välj ditt recept</label>
    <select v-model="selectedRecId">
      <option
        v-for="recipe in recipes"
        :key="recipe.recipeId"
        :value="recipe.recipeId"
      >
        {{ recipe.recipeName }}
      </option>
    </select>

    <div class="flex">
      <label>Välj kategori</label>
      <label><input type="radio" v-model="category" value="1" />Kött</label>
      <label><input type="radio" v-model="category" value="2" />Fisk</label>
      <label><input type="radio" v-model="category" value="3" />Kyckling</label>
      <label><input type="radio" v-model="category" value="4" />Vegan</label>
      <label
        ><input type="radio" v-model="category" value="5" />Vegetariskt</label
      >
      <button type="submit" @click="submitCategoryMessage()">
        Koppa ditt recept med en kategori!
      </button>
    </div>
  </form>
  <h4 v-if="categoryMessage">Du har nu kopplat ditt recept med en kategori!</h4>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }

  .flex input[type='text'] {
    width: 50%;
  }

  button {
    width: 20%;
    margin-top: 5px;
  }
</style>
