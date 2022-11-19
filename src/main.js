import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // 导入全局样式
import '@/plugins' // 导入vant组件
import 'amfe-flexible' // 动态设置 REM 基准值
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
