/*
  import <VariableName> from <ComponentName>
  <VariableName>：自定义的变量名
  <ComponentName>：vue组件的名称
*/
import Vue from 'vue'
import Router from 'vue-router'
/*
  import <VariableName> from <ComponentPath>
  <VariableName>：自定义的变量名，只是引入不需要定义变量名则直接import <ComponentPath>
  <ComponentPath>：vue组件所在的路径，如果在webpack.base.conf.js的resolve的extensions中配置了扩展名则可以省略.vue后缀，其中@为..
*/
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/Index'
import CustomerPage from '@/components/Customer'

Vue.use(Router) // 注册路由

export default new Router({
  mode: 'history',
  /*
    路由与组件相互绑定
    path：定义路由路径，值可以在目标模板中获取 this.$router.path
    name：定义路由名称，值可以在目标模板中获取 this.$router.name
    component：定义当前路由绑定的组件

    命名视图  https://router.vuejs.org/zh-cn/essentials/named-views.html
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    path: '/'
    components：{ default: Foo, a: Bar, b:Baz}

    动态路由匹配  https://router.vuejs.org/zh-cn/essentials/dynamic-matching.html
    通过冒号实现动态路由匹配，带:的部分不参与匹配，且:后面的名称将作为 this.$router.params的key值
    例如path路径为：/user/:username/post/:post_id
    则/user/foo/post/1匹配成功，且this.$router.params => { "username": "foo", "post_id": "1" }
    则/user/bar/post/2匹配成功，且this.$router.params => { "username": "bar", "post_id": "2" }

    高级匹配模式
    使用path-to-regexp作为路径匹配引擎，引擎地址：https://github.com/pillarjs/path-to-regexp#parameters

    匹配优先级
    当一个路径可以匹配多个路由的时候，匹配先定义的
  */
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/customer',
      name: 'Customer',
      component: CustomerPage
    }
  ]
})
