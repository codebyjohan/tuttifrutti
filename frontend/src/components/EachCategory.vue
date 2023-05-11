 <template>
  <div>
  <h1>{{ filteredCategoryByID.categoryName }}</h1></div>
  <p>{{ filteredCategoryByID.categoryName }}</p>
  
  </template>
  
  <script>
  export default{
    data(){
    return {category: null
    }},
  
  computed: {
    filteredCategoryByID() {
      if (this.category === null) {
        return []
        }
        return this.category.find((category) => category.id == this.$route.params.categoryId)
      }},

  created(){
    fetch("http://localhost:3000/category").then((response) => {
      return response.json()
    }).then((result) =>{
      console.log(result)
      this.category = result;
    })

  }}
    </script>
  
  