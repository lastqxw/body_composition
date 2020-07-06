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
      component: resolve => require(["@/views/allBill/allBill.vue"], resolve)
    },
    {
      path: "/home/:type",
      name: "home",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/home/home.vue"], resolve)
    },
    {
      path: "/allBill/:type",
      name: "allBill",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/allBill/allBill.vue"], resolve)
    },
    {
      path: "/details/:id/:type/:appId/:userId",
      name: "details",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/details/details.vue"], resolve)
    },
    {
      path: "/store/:id",
      name: "details",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/storeInfo/storeInfo.vue"], resolve)
    },
    {
      path: "/transactionRecord/:receiveUserId",
      name: "transactionRecord",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve =>
        require(["@/views/transactionRecord/transactionRecord.vue"], resolve)
    }
  ]
});
