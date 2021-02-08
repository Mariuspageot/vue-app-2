<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SearchMovie></SearchMovie>
    <Recommendations></Recommendations>
  </div>
</template>
<script>
// @ is an alias to /src
import SearchMovie from '@/components/SearchMovie.vue'
import Recommendations from "@/components/Recommendations";

export default {
  name: 'Home',
  components: {
    SearchMovie,
    Recommendations,
  }
}
</script>