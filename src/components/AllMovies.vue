<template>
  <router-link :to="{ name: 'info', params: { id: id} }">
    <div class="movie">
      <h3>{{ overview }}</h3>
      <img :src="'https://www.themoviedb.org/t/p/w260_and_h390_bestv2/' + poster_path" alt="">
      <h1>{{ title }}</h1>
      <h4> {{ release_date }} </h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AllMovies',
  props: ['id', 'title', 'overview', 'poster_path', 'vote_average', 'release_date', 'first_air_date']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  width: 500px;
  text-align: center;
  margin:0 auto;
}
.movie{
  max-width: 300px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  margin: 30px auto;
}
.movie > h4{
  font-size: 0.8rem;
  background-color: white;
  width:100px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  border-radius: 30px;
  opacity: 0.7;
}
.movie > h1{
  font-size: 1rem;
}
.movie > img{
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
}
a{
  text-decoration: none;
  color: black;
}
</style>
