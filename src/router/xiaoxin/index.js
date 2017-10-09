/**
 * Created by yufeng.liu on 2017-10-01.
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
});
