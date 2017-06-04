import Vue from 'vue'
import * as _ from 'lodash'
import sumN from 'sumN'
import App from './components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    lodash: _.toUpper('This is uppercase using lodash'),
    sumN: sumN(1, 2, 4, 8, 5)
  }
})
