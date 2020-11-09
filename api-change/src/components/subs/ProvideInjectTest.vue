<template>
  <div>我已获得父组件的传值： </div>
  <div>{{detail}}, 地点： {{info.place}}， 日期： {{info.date}}</div>
</template>

<script>
import {inject} from 'vue'
export default {
  setup () {
    /* 如果祖先组件中没有关联的provide, inject的时候可以传一个默认值 */
    let userLocation = inject('location', 'The Universe')
    let detail = inject('detail', '')
    let info = inject('info')
    return {
      userLocation,
      detail,
      info
    }
  }
}
</script>