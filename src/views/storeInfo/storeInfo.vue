<!--
 * @Author: your name
 * @Date: 2020-06-01 10:24:51
 * @LastEditTime: 2020-06-02 09:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ido85-pay_web_site-pay_web_site-paymentSystem/src/views/storeInfo/storeInfo.vue
-->
<template>
  <div>
    <md-field style="padding:20px;height:100vh" v-if="storeInfo">
      <md-cell-item title="商户名称" :addon="storeInfo.storeName" />
      <md-cell-item title="业主名称" :addon="storeInfo.storeContacts" />
      <md-cell-item title="业主电话" :addon="storeInfo.storeContactsPhone" arrow />
    </md-field>
  </div>
</template>

<script>
import api from '@/api';
export default {
  name: '',
  data() {
    return {
      storeInfo: null,
    };
  },
  methods: {
    showStore() {
      let id = this.$route.params.id.toString();
      api.getStoreById(id).then(res => {
        console.log(res.data);
        this.storeInfo = res.data.data;
      });
    },
    tell() {
      window.location.href = 'tel://' + this.storeInfo.storeContactsPhone;
    },
  },
  mounted() {
    this.showStore();
  },
};
</script>

<style lang="less" scoped>
</style>
