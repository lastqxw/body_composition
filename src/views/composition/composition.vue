<!--
 * @Author: your name
 * @Date: 2020-08-23 15:58:32
 * @LastEditTime: 2020-08-27 18:47:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ido85-pay_web_site-pay_web_site-paymentSystem/src/views/composition/composition.vue
 -->
<template>
  <div class="mainBody" v-if="data">
    <div class="title">{{data.title}}</div>
    <div class="subTitle">
      <span :class="['notice']">{{data.noticeType==1?'园区公告':'系统公告'}}</span>
      <span class="source">作者:{{data.author}}</span>
      <span class="time">{{data.releaseTime?data.releaseTime.split("+")[0].replace('T',' ') :''}}</span>
    </div>
    <div class="action" v-html="data.content"></div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import { details } from '../../api/index';
export default {
  name: 'home',
  data() {
    return {
      data: null,
      noticeId: '',
      tenantId: '',
      userId: '',
    };
  },
  created() {
    // let
    console.log(this.$route.params);
    let params = this.$route.params;
    this.noticeId = params.noticeId;
    this.tenantId = params.tenantId;
    this.userId = params.userId;
    this.getDetails();
  },
  methods: {
    getDetails() {
      let params = {
        noticeId: this.noticeId,
        tenantId: this.tenantId,
        userId: this.userId,
      };
      details(params).then((res) => {
        console.log(res.data.data);
        if (res.data.code == 200) {
          res.data.data.content = res.data.data.content.replace('&lt;', '<').replace('&gt;', '>');
          this.data = res.data.data;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.mainBody {
  padding: 15px;
}
.title {
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(26, 26, 26, 1);
  line-height: 25px;
  margin-bottom: 15px;
}
.subTitle {
  .notice {
    padding: 4px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(48, 118, 240, 1);
    background-color: #ebf3ff;
  }
  .source {
    border-radius: 2px;
    padding: 2px 5px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-left: 10px;
  }
  .time {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    float: right;
  }
}
.action {
  line-height: 25px;
  padding-top: 4px;
  margin-top: 15px;
}
</style>

