<template>
  <mt-header fixed title="固定在顶部"></mt-header>
</template>
<script>
  import Vue from 'vue'
  import { Header } from 'mint-ui'

  Vue.component(Header.name, Header)

  export default {
    components: { Header },
    name: 'header',
    data () {
      return {
        msg: 'LOGO'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
