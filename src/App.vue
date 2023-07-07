<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FooTer></FooTer>
</template>

<script>
import NavBar from "./vistas/NavBar.vue"
import FooTer from "./vistas/FooTer.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer
  }
}
</script>

<style>
body{
  background: #E7E7E7;
}
</style>
