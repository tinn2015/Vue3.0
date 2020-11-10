<template>
  <div >
    <h2 class="text-center">Vite?</h2>
    <h3>Vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">ES imports</a> 开发，在生产环境下基于 Rollup 打包。</h3>
    <ul>
      <li>1. Webpack 热更新的更新速度会随着模块增多而变慢</li>
      <li>2. Webpack 实现模块化的胶水代码</li>
      <li class="dot">Vite:</li>
      <li>- 快速冷启动</li>
      <li>- 即时的模块热更新</li>
      <li>- 真正的按需编译</li>
      <li class="dot">Vite现状：</li>
      <li>现在还是试用阶段不够稳定</li>
      <li>vue3 官方提供的vite脚手架，eslint识别不了，import vue必须加上.vue后缀</li>
      <li>vue3 官方提供的vite脚手架，build rollup 报错无法import 非 js 模块</li>
      <li class="dot">Vite要干的事:</li>
      <li> vite 的一个实现核心 - 拦截浏览器对模块的请求并返回处理后的结果</li>
      <li>ES Modules无法解析 import vue from 'vue', vite会拦截返回正确的vue</li>
    </ul>
  </div>
</template>