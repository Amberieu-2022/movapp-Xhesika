<template>
  <div id="app">
    <router-link to="/"><img src="../src/assets/logo1.png" class="logo"></router-link>
    <div class="genre-film">
      <GenresTv />
    </div>
  </div>
  <div class="container-switch">
    <p>Films</p>
    <label class="switch">
      <input class="checked" type="checkbox" v-on:click="slide">
      <span class="slider"></span>
    </label>
    <p>Series</p>
  </div>
  <img src="./assets/burger.png" id="menu-burger">
  <nav id="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/search/">Search</router-link>
    <router-link to="/series/">Series</router-link>
    <router-link to="/genres/">Genres</router-link>
  </nav>
  <router-view/>
</template>

<script>
import GenresTv from './components/GenresTv.vue'

export default {
  name: 'App',
  components: {
    GenresTv
  },
  data () {
    return {
      data: [],
      page: 0,
      dataG: null,
      type: 'movie'
    }
  },
  methods: {
    slide: function () {
      this.dataG = null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: #81bccc;
}
#menu-burger{
  max-width: 50px;
  cursor: pointer;
  z-index: 9;
  position: fixed;
  right: 10px;
  top: 15px;
}
.home{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
}
.logo{
  width: 200px;
  padding: 20px;
  margin: 5px auto;
}
.movie{
  padding-top: 40px;
}
.movie > h3{
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px auto;
}
.movie > h1{
  font-size: 1.2rem;
}
#menu > a{
  text-decoration: none;
  color: black;
  padding: 10px 7px;
  margin: 10px;
  float: left;
  font-size: 1.2rem;
  border: 1px solid #857361;
}
#menu{
  width: 20%;
  height: 100vh;
  display: none;
  transition: all 3s ease-in;
  position: fixed;
  background-color: white;
  opacity: 0.9;
  z-index: 1;
  top: 0;
}
.show{
  display: flex !important;
  flex-direction: column;
  left: 0;
}
.container-switch {
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 5px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #22598f;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
