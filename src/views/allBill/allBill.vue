<template>
  <div>
    <div style="z-index: 999;position: relative;background-color: #F2F2F2;">
      <div></div>
      <div class="header" @click="showPopUp('bottom')">
        <span @click="changeType">全部交易类型 </span>
        <md-icon name="arrow-down" size="xs" style="font-size:13px;color:#B6B6B6"></md-icon>
      </div>
      <md-popup v-model="isPopupShow.bottom" position="bottom">
        <md-popup-title-bar title="选择交易类型"></md-popup-title-bar>
        <div class="md-example-popup md-example-popup-bottom">
          <div class="md-example-section">
            <md-button type="default" inline @click="getPayFeeModeCode(0)">全部</md-button>
            <span v-for="(item,index) in payList" :key="index">
              <md-button type="default" inline @click="getPayFeeModeCode(item.paymentCode)">{{item.paymentName}}</md-button>
            </span>
            <span></span>
          </div>
        </div>
      </md-popup>
      <div class="time" @click="isDatePickerShow = true">
        <span>{{datePickerValue}}</span>
        <md-icon name="arrow-down" size="xs" style="font-size:13px;color:#B6B6B6"></md-icon>
      </div>
      <md-date-picker ref="datePicker" v-model="isDatePickerShow" :max-date="maxDate" :min-date="new Date('2019/1/1')" type="custom" title="选择账单日期(月)" :text-render="textRender" :custom-types="['yyyy', 'MM']" :default-date="currentDate" @change="onDatePickerChange" @confirm="onDatePickerConfirm"></md-date-picker>
      <div class="all" @click="showSelector">
        <span>{{selectorValue}}</span>
        <md-icon name="arrow-down" size="xs" style="font-size:13px;color:#B6B6B6"></md-icon>
      </div>
      <md-selector v-model="isSelectorShow" default-value="2" :data="options[0]" max-height="320px" title="选择交易方式" @choose="onSelectorChoose"></md-selector>
      <div class="dis">
        <span>收入{{inMoney}},支出{{outMoney}}</span>
      </div>
    </div>
    <div class="main" v-if="billList.length>0">
      <pull-to :top-load-method="topRef" :bottom-load-method="refresh" :bottom-block-height="10" :bottom-config="BOTTOM_DEFAULT_CONFIG" :top-config='TOP_DEFAULT_CONFIG'>
        <div class="scroll-view-list">
          <md-field v-for="(item,index) in billList" :key="index">
            <md-cell-item :title="item.title || '---'" :addon="`${item.accessTag == 0 ? '+ ' : ''}`+ (item.money)" :brief="item.accessTime" @click.stop="toDetails(item.chargeId)">
              <div class="holder" slot="left" :style="'background:url(' +imgLi(item.chargeType) +') no-repeat center center;background-size: 100%;'"></div>
            </md-cell-item>
          </md-field>
        </div>
        <md-scroll-view-more slot="more" :is-finished="isFinished">
        </md-scroll-view-more>
      </pull-to>
    </div>
    <div class="main" v-else>
      <img src="../../assets/images/noSource.png" alt="">
      <!-- <span class="noSource">{{localStorage.getItem("h5")}}</span> -->
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import api from '../../api/index.js';
import { imgList } from '../../libs/util.js';
import PullTo from 'vue-pull-to';
export default {
  name: 'home',
  data() {
    return {
      isScroll: false,
      isSelectorShow: false,
      currentDate: new Date(),
      isPopupShow: {},
      isDatePickerShow: false,
      pageSize: 10,
      pageNo: 1,
      isFinished: false,
      maxDate: new Date(),
      datePickerValue: dayjs().format('YYYY年MM月'),
      options: [
        [
          {
            text: '全部',
            value: '全部',
          },
        ],
      ],
      selectorValue: '全部',
      payFeeModeCode: 0,
      billList: [], //账单交易类型
      payList: [], //支付方式
      billList1: [], //账单交易类型
      payList1: [], //支付方式
      imgList: [], //图片集合
      appId: '123', //appId
      userId: '17364', //userId
      type: 3, //账单类型0 现金零钱 1 通用代币 2 专用代币  3 all
      outMoney: null, //支出金额
      inMoney: null, //收入金额
      BOTTOM_DEFAULT_CONFIG: {
        pullText: '上拉加载',
        triggerText: '释放更新',
        loadingText: '加载中...',
        doneText: '加载完成',
        failText: '加载失败',
        loadedStayTime: 400,
        stayDistance: 50,
        triggerDistance: 70,
      },
      TOP_DEFAULT_CONFIG: {
        pullText: '下拉刷新', // 下拉时显示的文字
        triggerText: '释放更新', // 下拉到触发距离时显示的文字
        loadingText: '加载中...', // 加载中的文字
        doneText: '加载完成', // 加载完成的文字
        failText: '加载失败', // 加载失败的文字
        loadedStayTime: 400, // 加载完后停留的时间ms
        stayDistance: 50, // 触发刷新后停留的距离
        triggerDistance: 70, // 下拉刷新触发的距离
      },
      balanceType: '',
      setBalanceType: 2,
      useAppId: '',
      isFrist: localStorage.getItem('isFrist') ? localStorage.getItem('isFrist') : true,
    };
  },
  components: {
    PullTo,
  },
  created() {
    this.getQueryListPayment();
    // this.getBalanceType();
    // this.getOrderList();
  },
  methods: {
    getUserInfo() {
      let that = this;
      this.$bridge.callHandler('getUserInfo', {}, (data, responseCallback) => {
        this.billList = [];
        let res = JSON.parse(data);
        that.appId = res.appId;
        that.userId = res.userId;
        that.type = res.type;
        // localStorage.h5 = res;
        that.getBalanceType();
        that.getOrderList();
        responseCallback(data);
      });
    },
    getQueryListPayment() {
      api.queryListPayment().then(res => {
        console.log(res);
        if (res.data.success && res.data.state == '200') {
          this.payList = res.data.data;
          this.getUserInfo();
        }
      });
    },
    imgLi(type) {
      return imgList(type);
    },
    getBalanceType() {
      let params = {
        requestNo: '1234566',
        sign: dayjs(),
        appId: this.appId,
        userId: this.userId,
      };
      api.balanceType(params).then(res => {
        if (res.data.success && res.data.state == '200') {
          res.data.data.forEach(element => {
            if (element.appTag != 0) {
              this.setBalanceType = element.balanceType;
            } else {
              this.options[0].push({
                value: element.balanceType,
                text: element.balanceTypeName,
                appId: '',
              });
            }
          });
        }
      });
    },
    getAppList() {
      let params = {};
      api.appList(params).then(res => {
        if (res.data.success && res.data.state == '200') {
          res.data.data.forEach(element => {
            this.options[0].push({
              value: this.payUserId,
              text: element.appTypeName,
              appId: element.appId,
            });
          });
        }
      });
    },
    refresh(loaded) {
      this.isScroll = true;
      setTimeout(() => {
        this.pageNo += 1;
        this.getOrderList();
        loaded('done');
        this.isScroll = false;
      }, 2000);
    },
    topRef(loaded) {
      this.isScroll = true;
      setTimeout(() => {
        this.pageNo = 1;
        this.billList = [];
        this.getOrderList();
        loaded('done');
        this.isScroll = false;
      }, 2000);
    },
    getOrderList() {
      let startTime = dayjs(this.datePickerValue.replace('年', '-').replace('月', '')).startOf(
        'month',
      );
      let endTime = dayjs(this.datePickerValue.replace('年', '-').replace('月', '')).endOf('month');
      let h5 = localStorage.getItem('h5');
      let params = {
        requestNo: '1234566',
        sign: dayjs(),
        appId: this.appId,
        userId: this.userId,
        startTime: dayjs(startTime).format('YYYY-MM-DD'),
        endTime: dayjs(endTime).format('YYYY-MM-DD'),
        current: this.pageNo,
        size: this.pageSize,
        // balanceType: this.balanceType
      };
      if (this.balanceType !== '全部') {
        params.balanceType = this.balanceType;
      }
      if (this.payFeeModeCode !== 0) {
        params.chargeType = this.payFeeModeCode;
      }
      if (this.useAppId != '') {
        params.useAppId = this.useAppId;
      }
      api.listPage(params).then(res => {
        if (res.data.success && res.data.state == '200') {
          this.billList.push.apply(this.billList, res.data.data.records);
          this.inMoney = res.data.data.inMoney;
          this.outMoney = res.data.data.outMoney.split('-')[1];
        }
      });
    },
    getPayFeeModeCode(num) {
      this.billList = [];
      this.pageNo = 1;
      this.payFeeModeCode = num;
      this.getOrderList();
      this.$set(this.isPopupShow, 'bottom', false);
    },
    toDetails(id) {
      if (!this.isScroll) {
        this.$router.push({
          path: `/details/${id}/${this.type}/${this.appId}/${this.userId}`,
        });
      }
    },
    showPopUp(type) {
      this.$set(this.isPopupShow, type, true);
    },
    hidePopUp(type) {
      this.$set(this.isPopupShow, type, false);
    },
    changeType() {},
    showSelector() {
      this.isSelectorShow = true;
    },
    onSelectorChoose({ value, text, appId }) {
      this.billList = [];
      this.pageNo = 1;
      this.balanceType = value;
      this.selectorValue = text;
      this.useAppId = appId;
      this.getOrderList();
    },
    textRender() {
      const args = Array.prototype.slice.call(arguments);
      const typeFormat = args[0]; // 类型
      // const column0Value = args[1] // 第1列选中值
      const column1Value = args[2]; // 第2列选中值
      // const column2Value = args[3]; // 第3列选中值
      if (typeFormat === 'MM') {
        return `${column1Value}月`;
      }
    },
    onDatePickerChange(columnIndex, itemIndex, value) {
      console.log(
        `[Mand Mobile] DatePicker Change\ncolumnIndex: ${columnIndex},\nitemIndex:${itemIndex},\nvalue: ${JSON.stringify(
          value,
        )}`,
      );
    },
    onDatePickerConfirm(columnsValue) {
      console.log(`[Mand Mobile] DatePicker Confirm\nvalue: ${JSON.stringify(columnsValue)}`);
      this.billList = [];
      this.pageNo = 1;
      this.datePickerValue = this.$refs.datePicker.getFormatDate('yyyy年MM月');
      this.getOrderList();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  padding: 25px 0px;
  text-align: center;
  span {
    font-size: 15px;
    margin-right: 8px;
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
/deep/.md-cell-item-title {
  font-size: 14px;
}
</style>

