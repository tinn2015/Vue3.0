<template>
  <div>
    <h2 class="text-center">其他变化</h2>
    <ul>
      <li>1. vue实例上的这些方法：$on, $off and $once</li>
      <li>2. options.filters</li>
      <li>3. 组件上的inline-template属性</li>
      <li>4. v-on KeyCode Modifiers废弃</li>
      <li class="dot"><a href="https://v3.vuejs.org/guide/migration/key-attribute.html#with-template-v-for" target="_blank" rel="noopener noreferrer">Key</a></li>
      <li>5. v-if/v-else/v-else-if 无需再:key</li>
      <li>6. template v-for的时候key应该绑定在template上</li>
      <li>7. vue2.x上同一元素上v-for优先级大于v-if; vue3上v-if优先级大于v-for</li>
      <li><a href="https://v3.vuejs.org/guide/migration/v-bind.html#overview" target="_blank" rel="noopener noreferrer">8. v-bind 合并优先级的问题</a>，后绑定的覆盖前面绑定的</li>
      <li>9. .native事件修饰符被移除了</li>
      <li><a href="https://v3.vuejs.org/guide/migration/array-refs.html" target="_blank" rel="noopener noreferrer">10. 在v-for中直接绑定:ref 将不被支持</a></li>
      <li><a href="https://v3.vuejs.org/guide/migration/async-components.html#introduction" target="_blank" rel="noopener noreferrer">11. 在vue3 中需要通过defineAsyncComponent 来定义异步组件</a></li>
    </ul>
  </div>
</template>