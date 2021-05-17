<template>
  <div class="mdWrapper">
      <img :src="require('../assets/images/logo.png')" alt="Keyclock OIDC"/>
      <h3>Keycloak - OIDC</h3>
      <h4>Vue JS - Implicit flow authentication</h4>
      <h5>{{username}}</h5>
  </div>
</template>

<script>
  import { CookieName } from '../model/Config';
  import { parseToken, GetCookieValue } from '../model/Functions';
  export default {
    name: 'AuthorisedPage',
    created: function(){
      if(!GetCookieValue(CookieName)){
        this.$router.push({name: 'Home'});
      }
    },
    data: function(){
      return {
        username: parseToken(GetCookieValue(CookieName)).preferred_username
      }
    }
  }
</script>