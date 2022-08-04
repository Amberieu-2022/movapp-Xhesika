<template>
  <input type="text" placeholder="rechercher votre film" @input="search = $event.target.value" />
  <div class="container-search">
    <div class="search-card" v-if="data !== null">
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :poster_path="item.poster_path"></AllMovies>
    </div>
    <div v-else><h1>Recherchez votre film ...</h1></div>
  </div>
</template>

<script>
// @ is an alias to /src
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'SearchView',
  props: ['id', 'title', 'overview', 'poster_path'],
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchMovies(this.search)
  },
  watch: {
    search () {
      this.searchMovies(this.search)
    }
  },
  // watch il regarde ce qu'il fait l'utilisateur ou ce qu'il marque dans l'imput.
  methods: {
    async searchMovies (search) {
      const res = await apiService.getSearch(search)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>

<style>
.container-search{
}
.search-card{
  padding-top: 40px;
}
h3{
  width: 500px;
  text-align: center;
  margin: 10px auto;
}
.search-card{
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
}
.search-card > img{
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
}
a{
  text-decoration: none;
  color: black;
}
</style>
