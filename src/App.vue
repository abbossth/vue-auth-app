<template>
  <div id="app">
    <Nav />
    <div class="container d-flex justify-content-center">
      <Login />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Login from './components/Login'
export default {
  name: 'App',
  components: {
    Nav,
    Login
  }
}
</script>

<style>

</style>
