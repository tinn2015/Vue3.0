<template>
  <div><h2 class="text-center">Provid/Inject</h2></div>
  <ul>
    <li class="dot">该功能主要用于祖先组件向其子孙组件注入依赖</li>
    <li class="dot">这里主要说明与setup结合使用</li>
  </ul>
  <ProvideInjectTest></ProvideInjectTest>
</template>

<script>
import {provide} from 'vue'
import ProvideInjectTest from './subs/ProvideInjectTest.vue'
export default {
  components: {
    ProvideInjectTest
  },
  setup () {
    provide('detail', '请按时前往')
    provide('info', {
      place: '杭州',
      date: '2020-11-07'
    })
  }
}
</script>