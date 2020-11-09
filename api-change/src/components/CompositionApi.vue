<template>
  <h2 class="text-center">Composition Api</h2>
  <ul>
    <li class="dot">为什么Composition Api?</li>
    <li>1. vue2.x 更多的是面向模板， 而不是函数式，所以不够灵活。而且模板难以将组件中单个逻辑独立划分。</li>
    <li>2. vue2.x 组件间共享和重用代码只能通过mixins, mixins会有命名冲突问题而且api不是显示的， 不进入mixins根本不知道这块代码干了什么。</li>
    <li>3. 项目越庞大以上问题越明显。<a href="https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api" target="_blank" rel="noopener noreferrer">详见</a></li>
    <li class="dot">Composition Api主要就是为了解决以上问题，借鉴了React Hooks 的思想，实际上是实现了vue基于模板的函数式开发</li>
  </ul>
  <h3>详见下图</h3>
</template>