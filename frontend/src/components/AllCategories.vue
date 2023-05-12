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
        <h2>
          {{ category.categoryName }}
        </h2>
        <RouterLink to="/categories/Fisk">
          <img
            v-if="category.categoryName === 'Fisk'"
            src="/assets/Fish.jpg"
            alt="Fisk"
        /></RouterLink>
        <RouterLink to="/categories/Kött"
          ><img
            v-if="category.categoryName === 'Kött'"
            src="/assets/Meat.jpg"
            alt="Kött"
        /></RouterLink>
        <RouterLink to="/categories/Kyckling"
          ><img
            v-if="category.categoryName === 'Kyckling'"
            src="/assets/Chicken.jpg"
            alt="Kyckling"
        /></RouterLink>
        <RouterLink to="/categories/Vegetariskt"
          ><img
            v-if="category.categoryName === 'Vegetariskt'"
            src="/assets/Vegetarian.jpg"
            alt="Vegetariskt"
        /></RouterLink>
        <RouterLink to="/categories/Vegan"
          ><img
            v-if="category.categoryName === 'Vegan'"
            src="/assets/Vegan.jpg"
            alt="Vegan"
        /></RouterLink>
      </li>
    </ol>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    padding: 50px;
  }
  h2 {
    margin: 5px 5px;
  }
  #container {
    margin: 0px 100px;
  }
  #container > ol {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* border: 2px solid black; */
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    /* border: 2px solid red; */
    width: 400px;
  }
  img {
    margin: 10px 30px 30px;
    padding: 0;
    width: 300px;
  }
</style>
