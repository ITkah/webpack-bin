import Vue from 'vue';
const hello = require('../components/hello.vue');

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    hello: hello
  }
});