<template>
  <div v-if="details">
    <div class="header">
      <div :style="'background:url(' +imgLi(details.paymentCode) +') no-repeat center center;background-size: 100%;'"></div>
      <div>{{details.title}}</div>
      <div>{{details.money > 0 ? "+"+(details.money) : (details.money)}}</div>
      <p class="billMoney">
        <span>订单金额</span><span>{{details.orderFee}}</span>
      </p>
      <p v-if="details.paymentCode !='CZ' && details.reduceFee !='0.00' || details.reduceFee>0" class="billMoney">
        <span style="color:#EB584A">代金券金额</span>
        <span style="color:#EB584A">-{{details.reduceFee}}</span>
      </p>
    </div>
    <div class="main">
      <div class="line"></div>
      <div class="type">
        <span>当前状态</span>
        <span>交易成功</span>
      </div>
      <div class="type">
        <span>商户全称</span>
        <span>{{details.receiveUser}}</span>
      </div>
      <div class="type" v-if="details.paymentCode === 'ZC' || !details.paymentCode">
        <span>商品信息</span>
        <span>{{details.productName || "----"}}</span>
      </div>
      <div class="type">
        <span>交易时间</span>
        <span>{{details.recvTime}}</span>
      </div>
      <div class="type">
        <span>交易单号</span>
        <span>{{details.chargeId}}</span>
      </div>
      <div class="type">
        <span>交易方式</span>
        <span>{{details.payWayName}}</span>
      </div>
      <div class="type">
        <span>交易类型</span>
        <span>{{details.paymentName}}</span>
      </div>
    </div>
    <div class="footer" v-if="details.paymentCode==='ZC'">
      <md-field style="padding:0px;">
        <md-cell-item title="彼此的历史交易记录" arrow @click="onClick" />
        <md-cell-item title="联系" arrow @click="showStore" />
        <!-- <md-cell-item title="帮助" arrow /> -->
      </md-field>
    </div>
    <md-popup v-model="isPopupShow">
      <div class="md-example-popup md-example-popup-center">
        <md-field style="padding:0px;">
          <md-cell-item title="商户名称" addon="可用8000.34" />
          <md-cell-item title="业主名称" addon="可用8000.34" />
          <md-cell-item title="业主电话" addon="可用8000.34" arrow />
        </md-field>
      </div>
    </md-popup>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import api from '@/api';
import { imgList } from '../../libs/util.js';
export default {
  name: 'detail',
  data() {
    return {
      details: null,
      storeInfo: null,
      isPopupShow: false,
    };
  },
  watch: {
    details() {},
  },
  created() {
    // alert('created');
    this.getOrderDetails();
  },
  methods: {
    onClick() {
      this.$router.push({
        path: `/transactionRecord/${this.details.receiveUserId}?appId=${this.$route.params.appId}&userId=${this.$route.params.userId}`,
      });
    },
    imgLi(type) {
      return imgList(type);
    },
    getOrderDetails() {
      let params = {
        requestNo: '1234566',
        sign: dayjs(),
        appId: this.$route.params.appId,
        userId: this.$route.params.userId,
        chargeId: this.$route.params.id,
      };
      api.details(params).then(res => {
        if (res.data.success && res.data.state == '200') {
          this.getQueryListPayment(res.data.data);
        }
      });
    },
    getQueryListPayment(item) {
      api.queryListPayment().then(res => {
        console.log(res);
        if (res.data.success && res.data.state == '200') {
          console.log(res);
          let result = res.data.data.filter(y => y.paymentCode === item.paymentCode);
          if (result.length) {
            item.paymentName = result[0].paymentName;
          }
          this.details = item;
        }
      });
    },
    showStore() {
      let id = this.details.receiveUserId;
      this.$router.push({
        path: `/store/${id}`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  padding-top: 25px;
  background-color: #fff;
  text-align: center;
  div:first-child {
    width: 53px;
    height: 53px;
    background: rgba(232, 56, 40, 1);
    border-radius: 50%;
    color: #fff;
    margin-left: calc(50vw - (53px / 2));
    line-height: 53px;
    font-size: 24px;
  }
  div:nth-child(2) {
    margin-top: 20px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
  div:nth-child(3) {
    margin-top: 21px;
    font-size: 28px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 30px;
  }
  .billMoney {
    overflow: hidden;
    text-align: left;
    margin-top: 20px;
    padding: 0px 15px;
    span {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      &:last-child {
        color: #000;
        float: right;
      }
    }
  }
}
.main {
  padding: 15px;
  text-align: left;
  background-color: #fff;
  .line {
    width: 345px;
    height: 1px;
    background: rgba(226, 226, 226, 1);
  }
  .type {
    margin-top: 24px;
    span:first-child {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    span:last-child {
      margin-left: 24px;
      font-size: 15px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }
}
.footer {
  margin-top: 6px;
  background-color: #fff;
  padding: 0px 15px;
  padding-bottom: 50px;
}
.md-example-popup {
  width: 200px;
  position: relative;
  font-size: 28px;
  font-family: DINPro;
  font-weight: 500;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
}
.md-example-popup-center {
  padding: 10px;
  border-radius: radius-normal;
}

/deep/.md-cell-item-title {
  font-size: 15px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
/deep/.md-cell-item-content {
  text-align: left;
  font-size: 15px;
}
/deep/.md-cell-item-body {
  padding: 0px;
  min-height: 60px;
}
/deep/.md-icon.icon-font.md {
  font-size: 13px;
  margin-right: 20px;
}
/deep/.md-icon.icon-font:before {
}
</style>
