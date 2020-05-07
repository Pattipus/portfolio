<template>
  <v-app>
    <webapp-header id="head" />
    <v-img id="bgimg" src="./assets/background.jpg"></v-img>
    <router-view id="view"></router-view>
    <webapp-footer id="foot" />
  </v-app>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  name: 'App',

  components: {
    'webapp-header':header,
    'webapp-footer': footer,
  },

  data(){
    return{

    }
  }
};
</script>

<style lang="scss" scoped>

  #bgimg{
    display: flex;
    position: fixed;
    z-index: 1;
    height: 100vh;
  }

  #head, #foot, #view{
    z-index: 2;
  }

</style>
