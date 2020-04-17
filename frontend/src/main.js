import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    let token=sessionStorage.getItem("access_token");
    if(token){
     this.$store.dispatch("getMemberInfo");
    }
   },
  router,store,
  render: h => h(App),
}).$mount('#app')
