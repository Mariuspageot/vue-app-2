<template>
  <div>
    <p v-if="infoMovies">{{ infoMovies.data.results[0].title }}</p>
  </div>
</template>

<script>
const axios = require('axios').default;
export default {
  name: "SearchMovie",
  props: {},
  data: function () {
    return {infoMovies: {}}
  },
  mounted() {
    axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=4d8b1374d7f8f0878d960e993a97be58&language=fr-FR&query=Asphalt Burning&include_adult=false ')
        .then(response => (this.infoMovies = response))
        .then(() => (console.log(this.infoMovies)))
  }
}
</script>

<style scoped>

</style>