import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Fragment from 'vue-fragment'
import CKEditor from 'ckeditor4-vue';
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false
Vue.use( Fragment.Plugin )
Vue.use( CKEditor );

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


