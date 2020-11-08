<template>
  <div class="home">
    <div class="cell"><RefReactive></RefReactive></div>
    <div class="cell"></div>
  </div>
</template>

<script>
import RefReactive from './components/RefReactive.vue'

export default {
  name: 'App',
  components: {
    RefReactive
  }
}
</script>
