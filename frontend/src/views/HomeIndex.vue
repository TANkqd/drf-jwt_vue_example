<template>
  <div>
      <template v-if="isLogin">
          {{userInfo.username}}, Hello?
          <button @click="logout2()">Logout</button>
      </template>
      <template v-else>
          Not logged in <br><router-link to="/login">go to login</router-link>
      </template>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['isLogin','isLoginError','userInfo'])
    },
    methods:{
        ...mapActions(['logout2'])
    }
}
</script>

<style>

</style>