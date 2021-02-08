<template>
  <div>
    <h1>Coming soon</h1>
    <div v-if="info.data.results.length>0">
        <div v-for="item in info.data.results">
          <img alt="poster" :src="urlImg(item)">
          {{ item.title }}
        </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
export default {
  name: "NewMovies",
  props: { },
  data: function () {
    return {info: {data:{results:{}}}}
  },
  methods: {
  urlImg(item) {
    return `https://image.tmdb.org/t/p/w92/${item.poster_path}`
  }},
  mounted() {
    axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=4d8b1374d7f8f0878d960e993a97be58')
        .then(response => (this.info = response));
  }
}
</script>

<style scoped>

</style>