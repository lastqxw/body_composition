<template>
  <div>
    <div style="z-index: 999;position: relative;background-color: #F2F2F2;" v-if="isRouterAlive">
      <div class="header">
        <span>请选定交易方式</span>
      </div>
      <div class="main">
        <div class="scroll-view-list">
          <md-field v-for="(item,index) in billList" :key="index">
            <md-cell-item :title="item.balanceTypeName" @click="toDetails(item.balanceType)" arrow>
              <div class="holder" slot="left" :style="'background:url(' +imgLi(item.balanceType) +') no-repeat center center /80%;background-size: 80%;'"></div>
              <p v-if="item.appTag == 1 " slot="children" style="font-size:15px;color:#000;padding:0px">
                <md-field v-for="(list,lis) in payList" :key="lis">
                  <md-cell-item :title="list.appTypeName" @click.stop="toDetails(item.balanceType,list.appId)">
                    <div class="holder" slot="left" :style="'background:#fff;background-size: 80%;'"></div>
                  </md-cell-item>
                </md-field>
              </p>
            </md-cell-item>
          </md-field>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import api from "../../api/index.js";
import { imgList } from "../../libs/util.js";
export default {
  name: "home",
  data() {
    return {
      // 0 现金零钱 1 通用代币 2 专用代币 4 资金池专用
      billList: [], //账单交易类型
      payList: [], //支付方式
      imgList: [], //图片集合
      appId: "1111111", //appId
      userId: 1188, //userId
      type: 3, //账单类型0 现金零钱 1 通用代币 2 专用代币  3 all
      isRouterAlive: true
    };
  },
  created() {
    var that = this;
    this.getBalanceType();
    this.getAppList();

    var device = "";
    var ua = navigator.userAgent;
    if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
      device = "IOS";
    } else if (/(Android)/i.test(ua)) {
      device = "Android";
    }
    try {
      if (device == "Android") {
        this.appId = JSON.parse(localStorage.getItem("h5")).appId;
        this.userId = JSON.parse(localStorage.getItem("h5")).userId;
        this.type = JSON.parse(localStorage.getItem("h5")).type;
        this.getBalanceType();
      } else if (device == "IOS" && localStorage.h5) {
        this.appId = JSON.parse(localStorage.getItem("h5")).appId;
        this.userId = JSON.parse(localStorage.getItem("h5")).userId;
        this.type = JSON.parse(localStorage.getItem("h5")).type;
        this.getBalanceType();
      } else {
        this.JsBridge.registerHandler(
          "getOrderType", //注册的方法名，供原生调用
          (data, responseCallback) => {
            that.appId = data.appId;
            that.userId = data.userId;
            that.type = data.type;
            localStorage.setItem("h5", JSON.stringify(data));
            that.getBalanceType();
            responseCallback("js say: got it!"); //处理完成后返回给原生
          }
        );
      }
    } catch (error) {
      alert(error);
    }
  },
  methods: {
    toDetails(id, type) {
      let url = "";
      if (type) {
        url = `/allBill/${id}?appid=${type}`;
      } else {
        url = `/allBill/${id}`;
      }
      this.$router.push({
        path: url
      });
    },
    imgLi(type) {
      return imgList(type);
    },
    getBalanceType() {
      let params = {
        requestNo: "1234566",
        sign: dayjs(),
        appId: this.appId,
        userId: this.userId
      };
      api.balanceType(params).then(res => {
        if (res.data.success && res.data.state == "200") {
          this.billList = res.data.data;
        }
      });
    },
    getAppList() {
      let params = {};
      api.appList(params).then(res => {
        if (res.data.success && res.data.state == "200") {
          this.payList = res.data.data;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  padding: 56px 0px 31px 0px;
  text-align: center;

  span {
    font-size: 22px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
}
.holder {
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  background-size: 100%;
}
.md-example-popup {
  position: relative;
  font-weight: 500;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  .md-example-section {
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    span {
      display: inline-block;
      width: 100px;
      height: 48px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }
}
/deep/ .md-button {
  width: 100px;
  height: 48px;
  border-radius: 4px;
  &:hover {
    background-color: #3779f7;
    color: #fff;
    border-color: #3779f7;
  }
}
/deep/ .md-cell-item-children {
  padding: 0px;
  .md-cell-item-body {
    padding: 0px;
  }
}
.main {
  height: calc(100vh - 124px);
  // overflow: hidden;
  img {
    width: 150px;
    position: absolute;
    left: 50%;
    top: 30%;
    margin-left: -75px;
  }
  .noSource {
    width: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    text-align: center;
    font-size: 16px;
    color: #000;
  }
}
.time,
.all {
  float: left;
  padding: 0px 15px;
  span {
    margin-right: 6px;
    font-weight: 400;
    font-size: 15px;
    color: rgba(0, 0, 0, 1);
  }
}
.all {
  float: right;
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
</style>

