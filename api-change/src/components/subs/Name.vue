<template>
  <div>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup () {
    let userName = ref('')
    return {
      userName
    }
  }
}
</script>