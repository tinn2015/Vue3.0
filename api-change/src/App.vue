<template>
  <div class="home">
    <div class="cell"><ViteC></ViteC></div>
    <div class="cell"><V3></V3></div>
    <div class="cell"><GlobalApi></GlobalApi></div>
    <div class="cell"><CompositionApi></CompositionApi></div>
    <div class="cell"><SetUp name="ben"></SetUp></div>
    <div class="cell"><RefReactive></RefReactive></div>
    <div class="cell"><WatchComputed></WatchComputed></div>
    <div class="cell"><ProvideInject></ProvideInject></div>
    <div class="cell"><ModelValue></ModelValue></div>
    <div class="cell"><OtherChange></OtherChange></div>
    <div class="w-full clear-both"><Ts></Ts></div>
    <div><Attachment></Attachment></div>
  </div>
</template>

<script>
import ViteC from './components/ViteC.vue'
import V3 from './components/Vue3.vue'
import GlobalApi from './components/GlobalApi.vue'
import RefReactive from './components/RefReactive.vue'
import CompositionApi from './components/CompositionApi.vue'
import SetUp from './components/SetUp.vue'
import Attachment from './components/Attachment.vue'
import ModelValue from './components/ModelValue.vue'
import ProvideInject from './components/Provide&Inject.vue'
import WatchComputed from './components/WatchComputed.vue'
import OtherChange from './components/OtherChange.vue'
import Ts from './components/Ts.vue'

export default {
  name: 'App',
  components: {
    RefReactive,
    ViteC,
    GlobalApi,
    V3,
    CompositionApi,
    SetUp,
    Attachment,
    ModelValue,
    ProvideInject,
    WatchComputed,
    OtherChange,
    Ts
  },
  mounted () {
  },
  methods: {
  }
}
</script>
