import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Search from '/src/components/search/index'
import PromptResume from '/src/components/prompt-resume/index'



Vue.component(Search.name, Search)
Vue.component(PromptResume.name, PromptResume)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
