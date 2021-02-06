<template>
  <div class="home">
    <H1>Welcome</H1>
    <Popular/>
  </div>
</template>

<script>
// @ is an alias to /src
import Popular from "@/components/Popular";

export default {
  name: 'Home',
  components: {
    Popular
  }
}
</script>
