<template>
  <div class="hello">
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
const axios = require('axios').default;
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    info: String
  },
  methods: {

  },
  mounted () {
    axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=4d8b1374d7f8f0878d960e993a97be58&language=en-US&page=1')
        .then(response => (this.info = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
