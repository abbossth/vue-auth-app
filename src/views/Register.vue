<template>
  <div class="row mt-4 w-100">
    <div class="col-12 col-md-10">
      <div class="card p-2">
        <div class="card-body">
          <h3 class="text-center my-3">New User</h3>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider name="Username" rules="required|alpha" v-slot="{ errors }">
                <div class="form-group mb-3">
                <label for="username" class="form-label">Username</label>
                <input :style="(errors.length !== 0) ? 'border-color: red;': ''" id="username" type="text" v-model="formData.username" class="form-control" placeholder="abbos.akh2002">
                <small class="form-text text-wrap text-danger" style="font-size: 14px;">{{ errors[0] }}</small>
              </div>
              </ValidationProvider>
              
              <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
          </ValidationObserver>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  components: {
  },
  data: function() {
    return {
      formData: {
        username: '',
        email: '',
        phone: '',
        password: '',
        name: '',
        dob: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    }
  }
}
</script>

<style>

</style>