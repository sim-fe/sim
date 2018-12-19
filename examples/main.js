import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import SimUi from '../src/index'
import '../src/styles/index.scss'

Vue.component('demo-block', demoBlock)
Vue.use(SimUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')