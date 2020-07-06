<template>
  <div>
    <div class="main" v-for="(item,index) in arr" :key="index">
      <div class="time">
        <span>{{item.time}}</span>
      </div>
      <div class="dis">
        <span>收入{{inMoney}} 支出{{outMoney}}</span>
      </div>
      <md-field>
        <md-cell-item v-for="(item,index) in item.location" :key="index" :title="item.title" :addon="`${item.accessTag == 0 ? '+ ' : ''}`+ (item.money)" :brief="item.accessTime" @click="toDetails(item.chargeId)">
          <div class="holder" slot="left" :style="'background:url(' +imgLi(item.chargeType) +') no-repeat center center;background-size: 100%;'"></div>
        </md-cell-item>
      </md-field>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import api from '../../api/index.js';
import { imgList, flitterMouthType } from '../../libs/util.js';
export default {
  name: 'home',
  data() {
    return {
      arr: [],
      billList: [],
      outMoney: '',
      inMoney: '',
      appId: '',
      userId: '',
      imgLi: imgList,
    };
  },
  mounted() {
    console.log(this.$route);
    this.appId = this.$route.query.appId;
    this.userId = this.$route.query.userId;
    this.getRecord();
  },
  methods: {
    toDetails(id) {
      this.$router.push({
        path: `/details/${id}/${this.type}/${this.appId}/${this.userId}`,
      });
    },
    getRecord() {
      let params = {
        requestNo: '1234566',
        sign: dayjs(),
        appId: this.appId,
        userId: this.userId,
        startTime: '',
        endTime: '',
        current: 0,
        size: 99999,
        recvUserId: this.$route.params.receiveUserId,
        // balanceType: this.balanceType
        // chargeType: 'ZC',
      };
      api.listPage(params).then(res => {
        if (res.data.success && res.data.state == '200') {
          this.billList.push.apply(this.billList, res.data.data.records);
          let arr = flitterMouthType(this.billList);
          // let arr = flitterMouthType(this.billList);
          console.log(arr);
          this.arr = arr;
          this.inMoney = res.data.data.inMoney;
          this.outMoney = res.data.data.outMoney.split('-')[1];
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin-top: 13px;
  .time {
    float: left;
    padding: 0px 15px;
    span {
      margin-right: 6px;
      font-weight: 400;
      font-size: 15px;
      color: rgba(0, 0, 0, 1);
    }
  }
  .dis {
    clear: both;
    padding: 13px 15px;
    text-align: left;
    span {
      color: #adadad;
      font-size: 13px;
    }
  }
  .holder {
    width: 40px;
    height: 40px;
    background: #469de3;
    border-radius: 50%;
  }
  /deep/.md-field {
    padding: 0px 15px;
    .md-cell-item-body.multilines {
      padding: 0px;
      min-height: 63px;
    }
    .md-cell-item-content {
      .md-cell-item-brief {
        color: #adadad;
      }
    }
    .md-cell-item-right {
      color: #000;
    }
  }
}
/deep/.md-cell-item-left {
  margin-right: 16px;
}
</style>

