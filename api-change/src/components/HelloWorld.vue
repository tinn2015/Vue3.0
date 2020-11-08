<template>
  <h1>{{ msg }}</h1>
  <h2>{{count}}</h2>
  <h2>{{info.num}}</h2>
  <button @click="increase">increase</button>
  <button @click="double">double</button>
  <button @click="changeNum">changeNum</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const count = ref(0)
    let info = reactive({num: 0})
    const double = () => {
      return count.value = count.value * 2
    }
    const increase = () => {
      return count.value++
    }

    const changeNum  = () => {
      info.num = count.value
    }

    return {
      count,
      double,
      increase,
      info,
      changeNum
    }
  }
}
</script>
