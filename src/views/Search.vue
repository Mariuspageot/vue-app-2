<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SearchMovie></SearchMovie>
  </div>
</template>
<script>
// @ is an alias to /src
import SearchMovie from '@/components/SearchMovie.vue'

export default {
  name: 'Home',
  components: {
    SearchMovie
  }
}
</script>