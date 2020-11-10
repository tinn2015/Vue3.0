<template>
  <div>
    <h2>Watch & Computed</h2>
  </div>
  <ul>
    <li>1. watch 和 Computed 底层实现没有变， 只是封装成了函数式，可以按需引用</li>
    <li>2. 基于options的watch compute依然是可用的</li>
  </ul>
  <div class="mt10">
    <input type="text" v-model="name" placeholder="请输入名字">
    <div class="mt10">computed: {{computedName}}</div>
    <div class="mt10">watchName: {{watchName}}</div>
  </div>
</template>

<script>
import {ref, computed, watch} from 'vue'
export default {
  setup () {
    let name = ref('')
    let watchName = ref('')

    let computedName = computed(() => {
      return name.value ? name.value + ' (杭州)' : ''
    })

    watch(name, (newVlaue, oldValue) => {
      console.log(newVlaue, oldValue)
      watchName.value = newVlaue + ' (2020-11-8)'
    })

    return {
      name,
      computedName,
      watchName
    }
  }
}
</script>