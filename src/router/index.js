import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/:userId/:tenantId/:noticeId",
      name: "index",
      // component:resolve => require(['@/views/conferenceRoom/conferenceRoom.vue'], resolve)
      component: resolve => require(["@/views/composition/composition.vue"], resolve)
    },
  ]
});
