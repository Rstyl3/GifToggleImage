<template>
  <div id="app">
    <h1>SomeText Here</h1>
    <ToggleGif srcImg="AdalMsal" srcGif="deleted"/>
  </div>
</template>

<script>
import ToggleGif from './components/ToggleGif.vue'

export default {
  name: 'app',
  components: {
    ToggleGif
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}
h1{width:45%}
</style>
