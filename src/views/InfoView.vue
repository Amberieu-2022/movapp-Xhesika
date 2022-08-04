<template>
  <div class="info-container">
    <img :src="'https://www.themoviedb.org/t/p/w260_and_h390_bestv2/' + data.poster_path" alt="">
    <div class="overview">
      <h2>{{ data.title }}</h2>
      <p>{{ data.overview }}</p>
      <h4 class="vote"> Vote: {{ data.vote_average }} </h4>
      <h4> Date of publish: {{ data.release_date }} </h4>
    </div>
  </div>
  <router-link to="/" class="link">Retour</router-link>
</template>

<script>
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'infoView',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.infoView(this.id)
  },
  methods: {
    async infoView (id) {
      const res = await apiService.getMovie(id)
      const movies = await res.json()
      this.data = movies
    }
  }
}
</script>
<style>
.info-container{
  padding: 50px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50vh;
}
.info-container > img{
  width: 300px;
  height: 450px;
  object-fit: content;
}
.overview{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 1200px;
}
.overview > p{
  font-size: 1.2rem;
  font-family: Arial,sans-serif;
}
.overview > .vote{
  background-color: #cca878;
  width: 200px;
  height:50px;
  line-height: 50px;
  text-align: center;
  font-size: 1.2rem;
}
.link{
  text-decoration: none;
  color: black;
  background-color: #cca878;
  width: 200px;
  height:50px;
  line-height: 50px;
  font-weight: 500;
  position: absolute;
  right: 20px;
  top: 55%;
}
</style>
