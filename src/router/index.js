import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AuthorisedPage from '@/components/AuthorisedPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth',
      name: 'AuthorisedPage',
      component: AuthorisedPage
    }
  ],
  mode:'history'
})
