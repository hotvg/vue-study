<template>
  <mt-header fixed :title="title"></mt-header>
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
        title: '电影列表'
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
