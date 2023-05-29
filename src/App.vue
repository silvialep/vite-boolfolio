<script>

import AppMain from './components/AppMain.vue';
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
    AppMain,
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
    
      <AppMain></AppMain>
    
      <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss" scoped>

#app-container {
  background-color: rgb(56, 43, 43);
}

</style>








