<template>
  <div id="app">
    <homePage/>
 </div>
</template>

<script>

import homePage from '@/page/homePage.vue'

export default {
  name: 'App',
  components:{
    homePage,
}
  
 
}
</script>

<style>
  @import url('../src/style/reset.css');
 @import url(' https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
</style>
