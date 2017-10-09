<template>
  <mt-loadmore ref="loadmore">
    <ul id="movie-ul">
      <li v-for="moive in hotPlayMovies.movies">
        <img :src="moive.img" width="80" height="80"/>
        <span>{{ moive.titleCn }}</span>
      </li>
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
        hotPlayMovies: []
      }
    },
    mounted () {
      axios.get('/api/PageSubArea/HotPlayMovies.api',
        {
          params: {
            locationId : 290
          }
        })
        .then( res => {
          this.hotPlayMovies = res.data;
          //console.log(res.status);
          //console.log(res.statusText);
          //console.log(res.headers);
          //console.log(res.config);
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
  #movie-ul{
    list-style: none;
  }
</style>
