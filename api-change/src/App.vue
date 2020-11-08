<template>
  <div class="home">
    <div class="cell"><ViteC></ViteC></div>
    <div class="cell"><V3></V3></div>
    <div class="cell"><GlobalApi></GlobalApi></div>
    <div class="cell"><CompositionApi></CompositionApi></div>
    <div class="cell"><SetUp name="ben"></SetUp></div>
    <div class="cell"><RefReactive></RefReactive></div>
  </div>
</template>

<script>
import ViteC from './components/ViteC.vue'
import V3 from './components/Vue3.vue'
import GlobalApi from './components/GlobalApi.vue'
import RefReactive from './components/RefReactive.vue'
import CompositionApi from './components/CompositionApi.vue'
import SetUp from './components/SetUp.vue'

export default {
  name: 'App',
  components: {
    RefReactive,
    ViteC,
    GlobalApi,
    V3,
    CompositionApi,
    SetUp
  }
}
</script>
