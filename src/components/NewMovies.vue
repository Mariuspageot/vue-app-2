<template>
  <div class="newmovies">
    <p>{{ info }}</p>
  </div>
</template>

<script>
const axios = require('axios').default;
export default {
  name: "NewMovies",
  props: {
    info: String
  },
  methods: {},
  mounted() {
    axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=4d8b1374d7f8f0878d960e993a97be58&language=en-US&page=1')
        .then(response => (this.info = response));
  }
}
</script>

<style scoped>

</style>