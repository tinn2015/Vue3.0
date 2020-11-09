<template>
  <div>
    <h2 class="text-center">modelValue</h2>
    <ul>
      <li class="dot">vue2.x上的双向绑定</li>
      <li>1. v-model</li>
      <li>2. .sync</li>
      <li class="dot">这两个功能其实是有重叠的。在vue3中统一为v-model</li>
      <li class="dot">新增modelValue, 废弃组件的model选项</li>
      <li>默认是直接取modelValue， 自定义key v-model:data="counter"</li>
    </ul>
    <VModelTest v-model="counter" v-model:counterDouble="counterDouble"></VModelTest>
    
  </div>
</template>

<script>
import VModelTest from './subs/VModelTest.vue'
export default {
  data () {
    return {
      counter: 0,
      counterDouble: 0
    }
  },
  components: {
    VModelTest
  }
}
</script>
