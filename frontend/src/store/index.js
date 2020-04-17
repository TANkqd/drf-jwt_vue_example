import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);
import axios from 'axios';
import router from '../router.js'
export default new Vuex.Store({
  state: {
    isLogin:false,
    isLoginError:false,
    userInfo:null,
  },
  getters: {},
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
      sessionStorage.removeItem("access_token");
    }
  },
  actions: {
    Login(dispatch,loginObj) {
      console.log(loginObj);
      axios.post("https://djangosd.run.goorm.io/api/login/", loginObj)
        .then(res => {
          let token = res.data.token;
          sessionStorage.setItem("access_token", token);
          //this.dispatch("getMemberInfo");
          let userInfo = {
            pk: res.data.user.pk,
            username: res.data.user.username,
            email: res.data.user.email
          };
          dispatch.commit("loginSuccess", userInfo);
          router.push({name:"home"});
          console.log(res);
        })
        .catch(() => {
          alert("Check your id and email and password");
        });
    },
    Signup(dispatch,loginObj) {
      console.log(loginObj);
      axios.post("https://djangosd.run.goorm.io/api/registration/", loginObj)
        .then(res => {
          console.log(res);
          alert("Suceess your Signup");
          router.push({ name: "login" });
        })
        .catch(() => {
          alert("Check your id and email and password");
        });
    },
    logout2({ commit }) {
      commit("logout");
      // router.push({ name: "home" });
    },
    getMemberInfo({commit}){
      let token = sessionStorage.getItem("access_token");
      //토큰 -> 멤버 정보 반환
      //새로고침 --> 토큰만 갖고 멤버 정보 요청가능
      if (token) {
        axios
          .get("https://djangosd.run.goorm.io/api/user/", {
            'headers': {
              "Authorization": "jwt " + token
            }
          })
          .then(response => {
            console.log(response);

            let userInfo = {
              pk: response.data.pk,
              username: response.data.username,
              email: response.data.email
            };
            commit("loginSuccess", userInfo);
          })
          .catch((error) => {
            console.log(error);

          });
      }
    }
    
  }
});