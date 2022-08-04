<template>
    <div class="movie-serie">
    <h1> {{ id }} </h1>
      <h1>{{ title }}</h1>
      <h3>{{ overview }}</h3>
      <img :src="'https://www.themoviedb.org/t/p/w260_and_h390_bestv2/' + data.poster_path" alt="">
    </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'TvSeriesView',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.tvSeries(this.id)
  },
  methods: {
    async tvSeries (id) {
      const res = await apiService.getTvSeries(id)
      const tvSeries = await res.json()
      this.dta = tvSeries
    }
  }
}
</script>
