<script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {

  name: 'App',

  data() {
    return {

    }
  },

  props: {

  },

  emits: ['',

  ],

  components: {
    AppFooter,
    AppHeader,
  },


  computed: {

  },



}


</script>

<template>

  <div id="app-container">
    
      <AppHeader></AppHeader>
    
      <router-view></router-view>
    
      <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss" scoped>

#app-container {
  background-color: #4c3443;
}

</style>








