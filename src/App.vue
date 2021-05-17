<template>
  <router-view>
    <div id="app">
      <Home />
    </div>
  </router-view>
</template>

<script>
import Home from './components/Home.vue';
import './assets/css/style.css';
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
