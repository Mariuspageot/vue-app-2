<template>
  <div class="about">
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