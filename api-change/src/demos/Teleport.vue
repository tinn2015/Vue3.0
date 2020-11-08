/* App.vue */
<template>
    <div>123</div>
    <Teleport to="#container">
        Teleport
    </Teleport>
</template>

<script>
// Teleport其实就是React中的Portal。
// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
import { defineComponent, Teleport } from "vue";

export default defineComponent({
    setup() {}
});
</script>

/* index.html */
<div id="app"></div>
<div id="container"></div>