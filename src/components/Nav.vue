<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">AUTH-APP</router-link>
      <div class="d-flex">
        <router-link class="btn btn-sm btn-secondary" to="/register">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar'
}
</script>

<style>

</style>