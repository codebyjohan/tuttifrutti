<script>
  export default {
    created() {
      fetch('http://localhost:3000/category')
        .then((res) => res.json())
        .then((data) => {
          this.categories = data
        })
    },
    data() {
      return {
        categories: null
      }
    }
  }
</script>

<template>
  <h1>KATEGORIER</h1>
  <div id="container">
    <ol>
      <li :key="category.id" v-for="category in categories">
        {{ category.categoryName }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    padding: 50px;
  }
  #container > ol {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
