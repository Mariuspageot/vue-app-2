<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/comingsoon">Coming soon</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.box{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.card{
  margin: 10px;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title{
  text-align: center;
  width: 60%;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
