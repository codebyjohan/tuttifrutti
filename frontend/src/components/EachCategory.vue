 <template>
  <div>
<h1> {{ $route.params.id }}</h1>
</div>  

  <div v-for="category in OneCategory" :key="category.id">
    <ol>
      <li>
        <router-link :to="`/categories/${category.categoryId}`"
          >
          {{ category.categoryName }}
        </router-link>
      </li>
    </ol>
  </div>
</template>
  
<script>
  export default{

    created(){
      fetch('http://localhost:3000/category')
        .then((res) => res.json())
        .then((data) => {
          this.categories = data
          console.log(this.categories)
        })
    },

      computed: {
        OneCategory() {
          if (this.categories === null) {
            return []
            } else {
            return this.categories.filter((categories) => categories.categoryName === this.$route.params.id)
          }
          }},

    data(){
    return {categories: ''
    }}
  }
</script>
  
  