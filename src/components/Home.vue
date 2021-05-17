<template>
  <div class="mdWrapper">
      <img :src="require('../assets/images/logo.png')" alt="Keyclock OIDC"/>
      <h3>Keycloak - OIDC</h3>
      <h4>Vue JS - Implicit flow authentication</h4>
      <button class="btn-normal" v-on:click="authenticateLogin">Login</button>
  </div>
</template>

<script>
  import Keycloak from 'keycloak-js'
  import { CookieName, Config } from '../model/Config';
  import { SetCookieValue } from '../model/Functions';
  //keycloak init options
  let keycloak = Keycloak(Config);
  export default {
    name: 'Home',
    created: function(){
      keycloak.init({ flow: 'implicit', checkLoginIframe: false }).then((authenticated) => {
        try{
          if(!authenticated) {
            console.log("Not Authenticated");
            return false;
          } else {
            console.log("Authenticated");
          }
          SetCookieValue(CookieName, keycloak.token);
          this.$router.push({name: 'AuthorisedPage'})
        }
        catch(error){
          console.log("Authenticated failed due to \n" + error);
        }
      })
    },
    methods: {
      authenticateLogin: function(){
        keycloak.login({ redirectUri: window.location.origin })
      }
    }
  }
</script>
