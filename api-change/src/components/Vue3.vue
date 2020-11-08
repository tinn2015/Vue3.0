<template>
  <div>
    <h2 class="text-center">Vue3.0</h2>
  </div>
  <h3>六大亮点：</h3>
  <ul>
    <li class="dot">性能提升</li>
    <li>1. 重写了虚拟DOM实现， 这里优化了diff算法， patchNode是会标记静态节点， 比较时只会比较动态节点</li>
    <li>2. 静态节点渲染时直接从缓存读取</li>
    <li>3. 静态内容很大时， 直接在客户端_createStaticVNode创建静态节点，无需创建虚拟dom</li>
    <li class="dot">Tree shaking 支持</li>
    <li>vue 实例方法按需引入， 减小打包后的体积</li>
    <li class="dot">Composition API</li>
    <li class="dot">更好的 TypeScript 支持</li>
    <li class="dot">Custom Render Api</li>
    <li>见代码</li>
    <li class="dot">新增Frament、Teleport、Suspense三个组件</li>
    <li>见代码</li>
  </ul>
</template>