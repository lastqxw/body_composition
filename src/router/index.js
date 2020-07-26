import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/home/home.vue"], resolve)
    },
    {
      path: "/news",
      name: "news",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/news/news.vue"], resolve)
    },
    {
      path: "/bbs",
      name: "bbs",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/bbs/bbs.vue"], resolve)
    },
  ]
});
