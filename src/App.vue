<template>
  <div id="app">
    <Nav />
    <div class="container d-flex justify-content-center w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>

</style>
