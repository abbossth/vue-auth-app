<template>
  <div class="row mt-4">
    <div class="col">
      <div class="card p-2">
        <div class="card-body">
          <h3 class="text-center my-3">New User</h3>
          <form>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Username</span>
              <input type="text" class="form-control" placeholder="abbossth" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="email">Email</span>
              <input type="email" class="form-control" placeholder="abbos@example.com" aria-label="email" aria-describedby="email">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="phone">Phone</span>
              <input type="tel" class="form-control" placeholder="+998971234547" aria-label="phone" aria-describedby="phone">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="password">Password</span>
              <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="name">Name</span>
              <input type="text" class="form-control" placeholder="Abbos" aria-label="name" aria-describedby="name">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="name">DoB</span>
              <input type="date" class="form-control" aria-label="name" aria-describedby="name">
            </div>
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style>

</style>