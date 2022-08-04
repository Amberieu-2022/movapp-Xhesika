<template>
  <div class="movie-genres">
    <router-link :to="{ name: 'genres', params: {movorser: type, id: id} }">
      <ul class="genres-menu">
        <p>{{ name }}</p>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GenresTv',
  props: ['id', 'name', 'type']
}
</script>

<style scoped>
.movie-genres{
  flex-wrap: wrap;
  width: 40%;
  margin: 0 auto;
}
.genres-menu{
}
.genres-menu > p{
  border: 1px solid white;
  padding: 10px 20px;
  font-size: 3rem;
}
</style>
