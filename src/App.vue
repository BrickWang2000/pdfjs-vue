<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div id="app" style="background-color: red">
  <PdfJs msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PdfJs from './components/pdfjs.vue'

export default {
  name: 'App',
  components: {
    PdfJs
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
  margin-top: 0px;
  height: 100%;
}
html,body,#app1 {height: 100%;}
</style>
