<template>
  <div class="input-group mb-3">
    <span class="input-group-text" :id="id">{{ title }}</span>
    <input :type="type" v-model="result" class="form-control" :name="name" :placeholder="placeholder" :aria-label="title">
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