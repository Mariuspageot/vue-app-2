<template>
  <h1>Enter movie name</h1>
  <div id="search">
    <form>
      <input v-model="search" value="" v-on:keypress.enter="searchf" type="text">
    </form>
    <div v-if="info.data.results.length>0" class="box">
      <div v-for="item in info.data.results" class="card">
        <img v-if="item.poster_path" alt="poster" :src="urlImg(item)">
        <img v-else alt="poster" src="../assets/default.png">
        <h3 class="title">
          {{ item.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>


const axios = require('axios').default;
export default {
  name: "SearchMovie",
  props: {},

  data: function () {
    return {
      info: {data: {results: {}}},
      search: String,
    }
  },
  mounted() {
    this.search = ""
  },
  methods: {
    searchf() {
      axios
          .get('https://api.themoviedb.org/3/search/movie?api_key=4d8b1374d7f8f0878d960e993a97be58&language=fr-FR&query=' + this.search + '&include_adult=false ')
          .then(response => (this.info = response))
          .then(() => (console.log(this.info)))
          .then(() => (console.log(this.search)))
    },
    urlImg(item) {
      return `https://image.tmdb.org/t/p/w185/${item.poster_path}`
    }
  }
}
</script>

<style>
</style>