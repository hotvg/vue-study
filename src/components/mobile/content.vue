<template>
  <mt-loadmore ref="loadmore">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </mt-loadmore>
</template>
<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui'
  import axios from 'axios'

  Vue.component(Loadmore.name, Loadmore);

  export default {
    components: { Loadmore },
    name: 'loadmore',
    data () {
      return {
        list: []
      }
    },
    mounted () {
      let obj = {
        locationId : 290
      }
      axios.get('/api/PageSubArea/HotPlayMovies.api',
        {
          params: obj
        })
        .then( res => {
          this.list = res.data;
        console.log(res.data);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config);
        }, err => console.info( '02==>' + err ))
        .catch( err => console.info('error occur'))
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
