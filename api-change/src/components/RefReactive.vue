<template>
  <div class="text-center">
    <h3 ref="title">Ref & Reactive & toRefs</h3>
  </div>
  <ul>
    <li class="dot"><h4>ref: 用于创建基本类型的响应式</h4></li>
    <li>- ref创建的响应式值需要通过.value访问， 原因是ref的实现还reactive实现响应式</li>
    <li>- 在tempalte中会自动解构， 可以直接访问</li>
    <li class="dot">这个ref仍可以用来获取dom</li>
    <li class="dot"><h4>reactive: 用于创建引用类型的响应式</h4></li>
    <li>底层是Object.proxy实现拦截</li>
    <li class="dot"><h4>toRefs 将一个reactive对象转为普通对象，对象上的每个属性都是ref()类型的响应式数据</h4></li>
  </ul>
  <div class="flex">
    <h2>{{count}}</h2>
    <h2 class="ml20">{{info.num}}</h2>
    <h2 class="ml20">{{label}}</h2>
  </div>
  <button @click="increase">increase</button>
  <button class="ml10" @click="double">double</button>
  <button class="ml10" @click="changeNum">changeNum</button>
</template>

<script>
import {ref, reactive, toRefs, onMounted} from 'vue'
export default {
  name: 'RefReactive',
  props: {
    msg: String
  },
  setup () {
    /* ref get dom */
    const title = ref(null)
    /* ref */
    const count = ref(0)
    let info = reactive({
      num: 0,
      label: 'aa'
    })
    const double = () => {
      return count.value = count.value * 2
    }
    const increase = () => {
      return count.value++
    }

    const {label} = toRefs(info)
    const changeNum  = () => {
      info.num = count.value
      label.value = 'bb'
    }


    onMounted(() => {
      console.log('get dom title:', title)
    })
    

    return {
      count,
      double,
      increase,
      info,
      changeNum,
      label,
      title
    }
  }
}
</script>
