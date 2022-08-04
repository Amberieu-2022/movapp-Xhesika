<template>
  <div class="home-genres" v-if="data !== null">
    <GenresTv v-for="item in data" :key="item.id" :id="item.id" :name="item.name"></GenresTv>
  </div>
</template>

<script>
import GenresTv from '@/components/GenresTv.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'GenresView',
  components: {
    GenresTv
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.GenresTv()
  },
  methods: {
    async GenresTv () {
      const res = await apiService.getGenres()
      const genre = await res.json()
      this.data = genre.genres
      console.log(genre)
    }
  }
}
</script>
<style scoped>
.home-genres{
  display: flex;
  flex-wrap: wrap;
}
</style>
