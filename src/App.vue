<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userInfo: {},
    };
  },
  created() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 12px !important;
  background-color: #fff;
  height: 3508px;
  width: 2480px;
}
</style>
