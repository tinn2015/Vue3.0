<template>
  <h2 class="text-center">setup</h2>
  <h3>setup可以认为是Composition Api的入口</h3>
  <ul>
    <li class="dot">setup 在生命周期beforeCreate之前执行</li>
    <li>因为这时候组件还没有create, 所以这时候setup中没有this</li>
    <li>见下图</li>
    <li class="dot">接收两个参数(props, context)</li>
  </ul>
  <div>PageX: {{x}}, PageY: {{y}}</div>
  <div>姓名： {{userName}}, 分数：{{score}}</div>
</template>

<script>
import mouse from '../hooks/mouse.js'
import user from '../hooks/user.js'
// import mouse from '../hooks/mouse.js'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    console.log('setup')
    let {x, y} = mouse()
    let {userName, score} = user()
    return {
      x,
      y,
      userName,
      score
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  }
}
</script>

<style scoped>
img {
  width: 400px
}
</style>