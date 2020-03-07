<template>
  <div id="app">
    <div id="banner">
      <img alt="Vue logo" src="./assets/logo.png">
      <h3>Vue.js</h3>
    </div>
    <h3>Basic component</h3>
    <pre style="text-align: center">&lt;HelloWorld /&gt;</pre>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#banner {
  display: flex;
  align-items: center;
  justify-content: center;
}

#banner img {
  max-width: 50px;
}

</style>
