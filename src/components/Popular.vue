<template>
  <div>
    <h1>Popular</h1>
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
  name: "Popular",
  props: {},
  data: function () {
    return {info: {data: {results: {}}}}
  },
  mounted() {
    axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=4d8b1374d7f8f0878d960e993a97be58&language=fr-FR&page=1')
        .then(response => (this.info = response))
  },
  methods: {
    urlImg(item) {
      return `https://image.tmdb.org/t/p/w185/${item.poster_path}`
    }
  }
}
</script>

<style>

</style>