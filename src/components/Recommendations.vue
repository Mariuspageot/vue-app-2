<template>
  <div>
    <h1>Recommendations</h1>
    <table v-if="info">
      <td>
        <tr v-for="item in info.data.results">
          {{ item.title }}
        </tr>
      </td>
    </table>
  </div>
</template>

<script>
const axios = require('axios').default;
export default {
  name: "Recommendations",
  props: {},
  data: function () {
    return {info: {data:{results:{}}}}
  },
  mounted() {
    axios
        .get('https://api.themoviedb.org/3/movie/3/recommendations?api_key=4d8b1374d7f8f0878d960e993a97be58&language=fr-FRv&page=1')
        .then(response => (this.info = response))
  }
}
</script>

<style scoped>

</style>