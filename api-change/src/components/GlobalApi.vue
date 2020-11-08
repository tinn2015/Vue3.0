<template>
  <div>
    <h2 class="text-center">全局api 变化</h2>
    <ul class="text-left">
      <li>这里最主的变化是抽象出App的概念。</li>
      <li class="text-left">
<pre>
  import { createApp } from 'vue' 
  import MyApp from './MyApp.vue' 
  const app = createApp(MyApp)
  app.use(VueRouter)
  app.mount('#app')
</pre>
      </li>
      <li>- 将Vue全局字面量的配置， 如：Vue.user、Vue.mixin、Vue.directive现在都修改为app这个实例的配置了。</li>
      <li>- 一些全局api需要模块化引入，这样会有更好的Treeshaking</li>
      <li>- 一个项目需要多个实例的时候， 可以分别配置， 这在Vue2.x上是很难实现的</li>
    </ul>
  </div>
</template>