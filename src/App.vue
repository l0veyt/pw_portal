<template>
  <div id="app">
    <!--
      <router-link>标签默认会被渲染成一个<a>标签
      to=<routerPath>：指定跳转的路由路径，例如：to="/index"
      to=<routerName>：指定跳转的路由名称，例如：to="{ name: 'user', params: { userId: 123}}"，等同于router.push({ name: 'user', params: { userId: 123}})
    -->
    <router-link to="/index">测试</router-link>
    <!-- router-view标签：通过访问的路由来嵌入相对应的vue中template中的HTML代码 -->
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
