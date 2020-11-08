<template>
  <h2 class="text-center">setup</h2>
  <h3>setup可以认为是Composition Api的入口</h3>
  <ul>
    <li class="dot">setup 在生命周期beforeCreate和Created之间执行</li>
    <li>因为这时候组件还没有created, 所以这时候setup中没有this</li>
    <li>接收两个参数(props, context)</li>
  </ul>
  <NameInput></NameInput>
  <div>用户名：{{userName}}</div>
</template>

<script>
import NameInput from './subs/Name.vue'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {NameInput},
  setup (props, context) {
    console.log(this, 'this')
    console.log(props, 'props')
    console.log(context, 'context')
    let {userName} = NameInput
    console.log(userName, 'userName')
    return {
      userName
    }
  }
}
</script>