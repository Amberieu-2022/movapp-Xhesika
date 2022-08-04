<template>
  <div class="presentation">
    <h1> Bienvenue, </h1>
    <h2> Des millions de films, émissions télévisées et artistes...</h2>
  </div>
  <div class="home">
    <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :release_date="item.release_date" :poster_path="item.poster_path"></AllMovies>
  </div>
</template>

<style scoped>
.logo{
  padding: 30px;
}
.presentation{
  display: block;
  float: left;
  text-align: left;
  padding-left: 50px;
  color: white;
  opacity: 0.8;
}
.presentation > h1{
  font-size: 3rem;
}
</style>
<script>
// @ is an alias to /src
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      page: 1
    }
  },
  mounted () {
    this.AllMovies(this.page)
  },
  methods: {
    async AllMovies (page) {
      const res = await apiService.getMovies(page)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>
