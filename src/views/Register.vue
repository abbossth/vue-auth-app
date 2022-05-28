<template>
  <div class="row mt-4">
    <div class="col">
      <div class="card p-2">
        <div class="card-body">
          <h3 class="text-center my-3">New User</h3>
          <form @submit.prevent="formRegister">
            <Input 
              id="username" title="Username" name="username"
              placeholder="abbossth"
              v-model="username"
              type="text" />
            <Input id="email" title="Email" placeholder="test@mail.xyz" name="email" type="email" />
            <Input id="phone" title="Phone" placeholder="+998912345678" type="tel" name="phone" />
            <Input id="password" title="Password" placeholder="Password" type="password" name="password" />
            <Input id="text" title="Name" placeholder="John Smith" type="text" name="name"/>
            <Input id="dateOfBirth" title="Date of Birth" placeholder="" type="date" name="dob" />
            
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
          <p>{{ username }}</p>
          <p>{{ email }}</p>
          <p>{{ phone }}</p>
          <p>{{ password }}</p>
          <p>{{ name }}</p>
          <p>{{ dob }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input'
export default {
  name: 'RegistrationForm',
  components: {
    Input
  },
  data: function() {
    return {
      username: '',
      email: '',
      phone: '',
      password: '',
      name: '',
      dob: '',
      error: ''
    }
  },
  methods: {
    formRegister(e) {
      this.username = e.target.elements.username.value
      this.email = e.target.elements.email.value
      this.phone = e.target.elements.phone.value
      this.password = e.target.elements.password.value
      this.name = e.target.elements.name.value
      this.dob = e.target.elements.dob.value
    }
  }
}
</script>

<style>

</style>