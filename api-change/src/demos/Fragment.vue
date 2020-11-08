/* App.vue */
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>

<script>
// 在书写vue2时，由于组件必须只有一个根节点，很多时候会添加一些没有意义的节点用于包裹。
// Fragment组件就是用于解决这个问题的（这和React中的Fragment组件是一样的）
export default {};
</script>

