import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import HomeIndex from './views/HomeIndex.vue';
import LoginForm from "./views/LoginForm.vue";
import SignForm from "./views/SignForm.vue";
import FindInfo from './views/FindInfo.vue';
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeIndex,
    },
    {
      path: "/login",
      name: "login",
      component: LoginForm,
    },
    {
        path:"/signup",
        name:"signup",
        component:SignForm
    },
    {
        path:"/findinfo",
        name:"findinfo",
        component: FindInfo
    }
  ],
});  