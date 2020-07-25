<template>

  <div class="mainBody" :style="bgImg">
    <div :class="[data.isPrintingCompany==='2'?'logo':'']"></div>
    <div class="headerOne">{{data.idNumber}}</div>
    <div class="headerTwo">
      <span class="gender">{{data.sex==1?'男':'女'}}</span>
      <span class="stature">{{data.height}}cm</span>
      <span class="weight">{{data.weight}}kg</span>
      <span class="age">{{data.age}}</span>
      <span class="time">{{data.date}}</span>
    </div>
    <div class="totalScore">{{data.totalScore}}分</div>
    <div class="left">
      <div class="table oneTable">
        <table cellspacing="9">
          <tr>
            <td>{{data.shuiFenValue}}</td>
            <td rowspan="2">{{data.jiRouLiang1}}</td>
            <td rowspan="3">{{data.quZhiTiZhong}}</td>
            <td rowspan="4">{{data.tiZhong}}</td>
            <td>37.7~46.1</td>
          </tr>
          <tr>
            <td>{{data.danBaiZhiValue}}</td>
            <td>10.4~12.7</td>
          </tr>
          <tr>
            <td colspan="2">{{data.wuJiYanValue}}</td>
            <td>3.52~4.30</td>
          </tr>
          <tr>
            <td colspan="3">{{data.tiZhiFangValue}}</td>
            <td>6.7~13.5</td>
          </tr>
        </table>
      </div>
      <div class="table twoTable">
        <table cellspacing="9">
          <tr>
            <td width="824px"><span :class="['Tspan',data.tiZhong>=0&&data.tiZhong<57.7?'low':data.tiZhong>=57.7&&data.tiZhong<=57.7?'normal':'height']"></span><span>{{data.tiZhong}}</span></td>
            <td width="199px" class="zhengchang">57.7~57.7</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.guGeJiRouLiang>=0&&data.guGeJiRouLiang<28.8?'low':data.guGeJiRouLiang>=28.8&&data.guGeJiRouLiang<=35.2?'normal':'height']"></span><span>{{data.guGeJiRouLiang}}</span></td>
            <td width="199px" class="zhengchang">28.8~35.2</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.tiZhiFangLiang>=0&&data.tiZhiFangLiang<6.7?'low':data.tiZhiFangLiang>=6.7&&data.tiZhiFangLiang<=13.5?'normal':'height']"></span><span>{{data.tiZhiFangLiang}}</span></td>
            <td width="199px" class="zhengchang">6.7~13.5</td>
          </tr>
        </table>
      </div>
      <div class="table twoTable" style="margin-top:180px">
        <table cellspacing="9">
          <tr>
            <td width="824px"><span :class="['Tspan',data.shenTiZhiLiangZhiShu>=0&&data.shenTiZhiLiangZhiShu<18.5?'low':data.shenTiZhiLiangZhiShu>=18.5&&data.shenTiZhiLiangZhiShu<=24.0?'normal':'height']"></span><span>{{data.shenTiZhiLiangZhiShu}}</span></td>
            <td width="199px" class="zhengchang">18.5~24.0</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.zhiFangBaiFenBi>=0&&data.zhiFangBaiFenBi<10.0?'low':data.zhiFangBaiFenBi>=10.0&&data.zhiFangBaiFenBi<=20.0?'normal':'height']"></span><span>{{data.zhiFangBaiFenBi}}</span></td>
            <td width="199px" class="zhengchang">10.0~20.0</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.yaoTunBi>=0&&data.yaoTunBi<0.75?'low':data.yaoTunBi>=0.75&&data.yaoTunBi<=0.85?'normal':'height']"></span><span>{{data.yaoTunBi}}</span></td>
            <td width="199px" class="zhengchang">0.75~0.85</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.neiZangZhiFangMianJi>=0&&data.neiZangZhiFangMianJi<0.0?'low':data.neiZangZhiFangMianJi>=0.0&&data.neiZangZhiFangMianJi<=100.0?'normal':'height']"></span><span>{{data.neiZangZhiFangMianJi}}</span></td>
            <td width="199px" class="zhengchang">0.0~100.0</td>
          </tr>
        </table>
      </div>
      <div class="table fourTable">
        <table cellspacing="9">
          <tr>
            <td width="400px">{{data.muBiaoTiZhong}}</td>
            <td width="200px"></td>
            <td width="415px">{{data.tiZhongKongZhi}}</td>
          </tr>
          <tr>
            <td width="400px">{{data.jiRouKongZhi}}</td>
            <td width="200px"></td>
            <td width="415px">{{data.zhiFangKongZhi}}</td>
          </tr>
          <tr>
            <td colspan="3">{{data.jiChuDaiXieLiang}}</td>
          </tr>
        </table>
      </div>
      <div class="fiveTable">
        <table cellspacing="16">
          <tr>
            <td>{{data.riChang}}小时/周</td>
            <td>{{data.diYun}}小时/周</td>
            <td>{{data.zhongYun}}小时/周</td>
            <td>{{data.gaoYun}}小时/周</td>
          </tr>
        </table>
      </div>
      <div class="sixTable">
        <table cellspacing="5">
          <tr>
            <td>{{data.nengLiang}}g</td>
          </tr>
          <tr>
            <td>{{data.danBaiZhi}}g</td>
          </tr>
          <tr>
            <td>{{data.zhiFang}}g</td>
          </tr>
          <tr>
            <td>{{data.tanShui}}g</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="right">
      <!-- 躯干 -->
      <div class="Tbody">{{data.body}}kg</div>
      <div class="oneTable">
        <table cellspacing="9">
          <tr height="565px">
            <td valign="top">{{data.leftArm}}kg</td>
            <td valign="top" style="padding-left:195px">{{data.leftLeg}}kg</td>
          </tr>
          <tr height="400px">
            <td valign="top">{{data.rightLeg}}kg</td>
            <td valign="top" style="padding-left:205px">{{data.rightArm}}kg</td>
          </tr>
        </table>
      </div>
      <div class="font twoTable">
        <table cellspacing="9">
          <tr>
            <td valign="top" width="310px"><span v-show="data.tiXingPanDing==='1'">√</span></td>
            <td valign="top" width="280px"><span v-show="data.tiXingPanDing==='2'">√</span></td>
            <td valign="top" width="280px"><span v-show="data.tiXingPanDing==='3'">√</span></td>
          </tr>
          <tr>
            <td valign="top"><span v-show="data.tiXingPanDing==='4'">√</span></td>
            <td valign="top"><span v-show="data.tiXingPanDing==='5'">√</span></td>
            <td valign="top"><span v-show="data.tiXingPanDing==='6'">√</span></td>
          </tr>
          <tr>
            <td valign="top"><span v-show="data.tiXingPanDing==='7'">√</span></td>
            <td valign="top"><span v-show="data.tiXingPanDing==='8'">√</span></td>
            <td valign="top"><span v-show="data.tiXingPanDing==='9'">√</span></td>
          </tr>
        </table>
      </div>
      <div class="font threeTable">
        <ul>
          <li><span v-show="data.shangZhiJunHeng==='1'">√</span></li>
          <li><span v-show="data.shangZhiJunHeng==='2'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.xiaZhiJunHeng==='1'">√</span></li>
          <li><span v-show="data.xiaZhiJunHeng==='2'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.shangZhiFaDa==='1'">√</span></li>
          <li><span v-show="data.shangZhiFaDa==='2'">√</span></li>
          <li><span v-show="data.shangZhiFaDa==='3'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.xiaZhiFaDa==='1'">√</span></li>
          <li><span v-show="data.xiaZhiFaDa==='2'">√</span></li>
          <li><span v-show="data.xiaZhiFaDa==='3'">√</span></li>
        </ul>
      </div>
      <div class="font fourTable">
        <ul>
          <li><span v-show="data.danBaiZhi==='1'">√</span></li>
          <li><span v-show="data.danBaiZhi==='2'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.wuJiYan==='1'">√</span></li>
          <li><span v-show="data.wuJiYan==='2'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.zhiFang==='1'">√</span></li>
          <li><span v-show="data.zhiFang==='2'">√</span></li>
          <li><span v-show="data.zhiFang==='3'">√</span></li>
        </ul>
      </div>
      <div class="fiveTable">
        <table cellspacing="9">
          <tr>
            <td>{{data.RaAKhz}}</td>
            <td>{{data.LaAKhz}}</td>
            <td>{{data.TrAKhz}}</td>
            <td>{{data.RlAKhz}}</td>
            <td>{{data.LlAKhz}}</td>
          </tr>
          <tr>
            <td>{{data.RaBkhz}}</td>
            <td>{{data.LaBkhz}}</td>
            <td>{{data.TrBkhz}}</td>
            <td>{{data.RlBkhz}}</td>
            <td>{{data.LlBkhz}}</td>
          </tr>
          <tr>
            <td>{{data.RaCkhz}}</td>
            <td>{{data.LaCkhz}}</td>
            <td>{{data.TrCkhz}}</td>
            <td>{{data.RaCkhz}}</td>
            <td>{{data.LlCkhz}}</td>
          </tr>
        </table>
      </div>
      <div :class="[data.isPrintingBodyAge==='2'?'button':'']">
        <span style="margin-left: 319px;">{{data.xiongWei}}</span>
        <span style="margin-left: 100px;">{{data.shenTiNianLing}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
const url = require('../../../public/backgroundImg.png');
export default {
  name: 'home',
  data() {
    return {
      bgImg: {
        backgroundImage: 'url(' + url + ')',
      },
      data: null,
    };
  },
  created() {
    // this.getData();
    // js注册方法供原生调用;
    this.$bridge.registerHandler('getData', (data, responseCallback) => {
      var res = JSON.parse(data);
      this.bgImg.backgroundImage = res.isPrintPaper == 2 ? 'url(' + url + ')' : '#FFF';
      this.data = res;
      responseCallback(data);
    });
  },
  methods: {
    // JS调用原生方法
    getData() {
      let that = this;
      this.$bridge.callHandler('getData', {}, (data, responseCallback) => {
        alert(data, '接收到的数据');
        var res = JSON.parse(data);
        this.data = res;
        responseCallback(data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.mainBody {
  height: 3508px;
  width: 2480px;
  font-size: 36px;
  .header {
    position: absolute;
    width: 2480px;
    height: 280px;
    background: #fff;
  }
  .logo {
    width: 200px;
    height: 130px;
    background: #fff;
    float: right;
    margin-top: 120px;
    margin-right: 120px;
  }
  .headerOne {
    padding-top: 290px;
    padding-left: 172px;
  }
  .headerTwo {
    padding-top: 30px;
    .gender {
      margin-left: 229px;
    }
    .stature {
      margin-left: 260px;
    }
    .weight {
      margin-left: 180px;
    }
    .age {
      margin-left: 240px;
    }
    .time {
      margin-left: 810px;
    }
  }
  .totalScore {
    margin-left: 1751px;
    margin-top: 115px;
  }
  .left {
    width: 57%;
    float: left;
    .table {
      margin-left: 329px;
    }
    .oneTable {
      margin-top: 59px;
      tr {
        height: 71px;
      }
      td {
        width: 199px;
        text-align: center;
      }
    }
    .twoTable {
      margin-top: 190px;
      tr {
        height: 71px;
      }
      .zhengchang {
        text-align: center;
      }
      td {
        .Tspan {
          height: 4px;
          background: black;
          display: block;
          float: left;
          margin-top: 35px;
        }
        span {
          line-height: 71px;
        }
      }
    }
    .fourTable {
      margin-top: 120px;
      tr {
        height: 54px;
      }
      td {
        text-align: center;
      }
    }
    .fiveTable {
      margin-left: 104px;
      margin-top: 530px;
      tr {
        height: 80px;
      }
      td {
        width: 298px;
        text-align: center;
      }
    }
    .sixTable {
      margin-left: 760px;
      margin-top: 200px;
      tr {
        height: 55px;
      }
      td {
        text-align: center;
      }
    }
  }
  .right {
    float: right;
    .Tbodyhidden {
      position: absolute;
      top: 870px;
      padding-left: 350px;
    }
    .Tbody {
      position: absolute;
      top: 1050px;
      padding-left: 350px;
    }
    .font {
      font-family: SimSun;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }
    width: 41%;
    .oneTable {
      margin-left: 60px;
      margin-top: 157px;
      td {
        width: 355px;
        padding-top: 62px;
        padding-left: 140px;
      }
    }
    .twoTable {
      margin-top: 190px;
      margin-left: 14px;
      tr {
        height: 94px;
      }
      td {
      }
    }
    .threeTable {
      margin-top: 106px;
      margin-left: 152px;
      ul {
        width: 100%;
        list-style: none;
        margin-left: 50px;
        height: 63px;
      }
      li {
        display: inline-block;
        line-height: 40px;

        width: 236px;
      }
    }
    .fourTable {
      margin-top: 121px;
      margin-left: 152px;
      ul {
        width: 100%;
        list-style: none;
        margin-left: 50px;
        height: 63px;
      }
      li {
        display: inline-block;
        line-height: 40px;
        width: 236px;
      }
    }
    .fiveTable {
      margin-top: 160px;
      margin-left: 200px;
      tr {
        height: 60px;
      }
      td {
        width: 120px;
        font-size: center;
      }
    }
    .button {
      margin-top: 28px;
      width: 900px;
      height: 50px;
      background: #fff;
    }
  }

  .low {
    width: 66px;
  }
  .normal {
    width: 200px;
  }
  .height {
    width: 494px;
  }
}
</style>

