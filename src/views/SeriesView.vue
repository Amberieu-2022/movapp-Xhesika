<template>
  <div class="container-search">
    <h1> Toutes les series </h1>
    <div class="search-card" v-if="data !== null">
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.name" :first_air_date="item.first_air_date" :poster_path="item.poster_path"></AllMovies>
    </div>
  </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'SeriesView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      page: 1,
      name: 'coucou'
    }
  },
  mounted () {
    this.AllMovies(this.page)
  },
  methods: {
    async AllMovies (page) {
      const res = await apiService.getSeries(page)
      const movies = await res.json()
      this.data = movies.results
      console.log(this.data)
    }
  }
}
</script>
