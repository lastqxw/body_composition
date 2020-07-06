import Vue from "vue";
import App from "./App.vue";
import FastClick from "fastclick";
import "./styles/normalize.css";
import "./libs/responsive";
import "./styles/global.css";
import router from "./router";
import store from "./store";
import "./libs/axios";
import "./libs/mandMobile";
// import "mand-mobile/lib/mand-mobile.css";
// import JsBridge from "./config/jsBridge";
// import jsBridge from "./config/jsBridge";
import Bridge from './config/jsBridge'
import jsBridgeRegisterHandle from "./config/ridgeRegisterHandle";
// import VueJsBridge from 'vue-webview-js-bridge'
// Vue.use(JsBridge);
// Vue.use(VueJsBridge, {
//   debug: true,
//   nativeHandlerName: 'getOrderType',
// })
Vue.prototype.$bridge = Bridge
// Vue.use(jsBridge, {
//   ready() {
//     Vue.use(jsBridgeRegisterHandle);
//     let instance = new Vue()
//     instance.$myPlugs.getOrderType(() => {});
//   }
// });


if ("addEventListener" in document && "ontouchstart" in window) {
  FastClick.prototype.focus = function(targetElement) {
    targetElement.focus();
  };
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // JsBridge,
  render: h => h(App)
}).$mount("#app");
