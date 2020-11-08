<template>
  <div class="home">
    <div class="cell"><ViteC></ViteC></div>
    <div class="cell"><V3></V3></div>
    <div class="cell"><GlobalApi></GlobalApi></div>
    <div class="cell"><RefReactive></RefReactive></div>
  </div>
</template>

<script>
import ViteC from './components/ViteC.vue'
import V3 from './components/Vue3.vue'
import GlobalApi from './components/GlobalApi.vue'
import RefReactive from './components/RefReactive.vue'

export default {
  name: 'App',
  components: {
    RefReactive,
    ViteC,
    GlobalApi,
    V3
  }
}
</script>
