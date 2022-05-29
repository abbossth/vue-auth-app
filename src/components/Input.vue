<template>
  <div class="input-group mb-3">
    <span class="input-group-text" :id="id">{{ title }}</span>
    <input :type="type" :v-model="result" class="form-control" :name="name" :placeholder="placeholder" :aria-label="title">
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    id: String,
    title: String,
    placeholder: String,
    type: String,
    name: String
  },
  data: function() {
    return {
      result: ''
    }
  }
}
</script>

<style>

</style>


<!-- 
  <Input id="email" title="Email" placeholder="test@mail.xyz" name="email" type="email" />
  <Input id="phone" title="Phone" placeholder="+998912345678" type="tel" name="phone" />
  <Input id="password" title="Password" placeholder="Password" type="password" name="password" />
  <Input id="text" title="Name" placeholder="John Smith" type="text" name="name"/>
  <Input id="dateOfBirth" title="Date of Birth" placeholder="" type="date" name="dob" />
 -->

 <!-- 

   formRegister(e) {
      const newUser = {
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
        password: e.target.elements.password.value,
        name: e.target.elements.dob.value,
        dob: e.target.elements.dob.value,
      }
      console.log(newUser);
    }

  -->