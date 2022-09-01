import Vue from 'vue'
import App from './App.vue'
const vc=Vue.extend({})
const vcinstance=new vc
Vue.prototype.x=vcinstance
Vue.config.productionTip=false
new Vue({
  el:'#app',
components:{App},
  render:h=>h(App),
  beforeCreate() {
    Vue.prototype.$bus=this
  },
})
