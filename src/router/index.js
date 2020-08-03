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
      path: "/dark",
      name: "dark",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/home/dark.vue"], resolve)
    },
    {
      path: "/news",
      name: "news",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/news/news.vue"], resolve)
    },
    {
      path: "/news_dark",
      name: "news_dark",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/news/dark.vue"], resolve)
    },
    {
      path: "/bbs",
      name: "bbs",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/bbs/bbs.vue"], resolve)
    },
    {
      path: "/bbs_dark",
      name: "bbs_dark",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/bbs/dark.vue"], resolve)
    },
    {
      path: "/privacy",
      name: "privacy",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/privacy/privacy.vue"], resolve)
    },
    {
      path: "/privacy_dark",
      name: "privacy_dark",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/privacy/dark.vue"], resolve)
    },
    {
      path: "/user",
      name: "user",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/user/user.vue"], resolve)
    },
    {
      path: "/user_dark",
      name: "user_dark",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/user/dark.vue"], resolve)
    },
    {
      path: "/community",
      name: "community",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/community/community.vue"], resolve)
    },
    {
      path: "/community_dark",
      name: "community_dark",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/community/dark.vue"], resolve)
    },
  ]
});
