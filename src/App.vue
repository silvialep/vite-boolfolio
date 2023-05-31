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
    
      <div id="page-container">
        <router-view></router-view>

      </div>
    
      <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss" scoped>

#app-container {
  background-color: #4c3443;

  #page-container {
    height: calc(100vh - 100px);

  }
}

</style>








