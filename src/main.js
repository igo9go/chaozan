import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import routes from './routes';


Vue.use(VueRouter)

var router = new VueRouter({
  routes: routes,
})


new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')

//router.replace('/login')


// Check local storage to handle refreshes
// if (window.localStorage) {
//   if (store.state.user !== window.localStorage.getItem('user')) {
//     store.dispatch('SET_USER', JSON.parse(window.localStorage.getItem('user')))
//     store.dispatch('SET_TOKEN', window.localStorage.getItem('token'))
//   }
// }
