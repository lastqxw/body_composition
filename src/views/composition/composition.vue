<template>
  <div :class="['mainBody',data.isPrintPaper==='1'?'mainBodyOther':'']" :style="bgImg">
    <div :class="[data.isPrintPaper==='1'?'header':'']"></div>
    <div :class="[data.isPrintPaper==='1'?'header2':'']"></div>
    <div :class="[data.isPrintingCompany==='2'?'logo':'']"></div>
    <div class="headerOne">{{data.idNumber}}</div>
    <div class="headerTwo">
      <span class="gender">{{data.sex==1?'男':'女'}}</span>
      <span class="stature">{{data.height}}cm</span>
      <span class="weight">{{data.weight}}kg</span>
      <span class="age">{{data.age}}</span>
      <span class="time">{{data.date}}</span>
    </div>
    <div class="totalScore">{{data.totalBodyScore}}/100分</div>
    <div class="left">
      <div class="table oneTable">
        <table cellspacing="9">
          <tr>
            <td>{{data.totalMoisture}}</td>
            <td rowspan="2">{{data.muscleMass}}</td>
            <td rowspan="3">{{data.leanBodyMass}}</td>
            <td rowspan="4">{{data.weight}}</td>
            <td>{{data.totalMoistureRange}}</td>
          </tr>
          <tr>
            <td>{{data.protein}}</td>
            <td>{{data.proteinRange}}</td>
          </tr>
          <tr>
            <td colspan="2">{{data.inorganicSalt}}</td>
            <td>{{data.inorganicSaltRange}}</td>
          </tr>
          <tr>
            <td colspan="3">{{data.bodyFatMass}}</td>
            <td>{{data.bodyFatMassRange}}</td>
          </tr>
        </table>
      </div>
      <div class="table twoTable">
        <table cellspacing="9">
          <tr>
            <td width="824px"><span :class="['Tspan',data.weight>=0&&data.weight<data.weightLow?'low':data.weight>=data.weightLow&&data.weight<=data.weightHeight?'normal':'height']"></span><span>{{data.weight}}</span></td>
            <td width="199px" class="zhengchang">{{data.weightRange}}</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.skeletalMuscleMass>=0&&data.skeletalMuscleMass<data.skeletalMuscleMassLow?'low':data.skeletalMuscleMass>=data.skeletalMuscleMassLow&&data.skeletalMuscleMass<=data.skeletalMuscleMassHeight?'normal':'height']"></span><span>{{data.skeletalMuscleMass}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.skeletalMuscleMassRange}}</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.bodyFatMass>=0&&data.bodyFatMass<data.bodyFatMassLow?'low':data.bodyFatMass>=data.bodyFatMassLow&&data.bodyFatMass<=data.bodyHeight?'normal':'height']"></span><span>{{data.bodyFatMass}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.bodyFatMassRange}}</td>
          </tr>
        </table>
      </div>
      <div class="table twoTable" style="margin-top:180px">
        <table cellspacing="9">
          <tr>
            <td width="824px"><span :class="['Tspan',data.bodyMassIndex>=0&&data.bodyMassIndex<data.bodyMassIndexLow?'low':data.bodyMassIndex>=data.bodyMassIndexLow&&data.bodyMassIndex<=data.bodyMassIndexHeight?'normal':'height']"></span><span>{{data.bodyMassIndex}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.bodyMassIndexRange}}</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.fatPercentage>=0&&data.fatPercentage<data.fatPercentageLow?'low':data.fatPercentage>=data.fatPercentageLow&&data.fatPercentage<=data.fatPercentageHeight?'normal':'height']"></span><span>{{data.fatPercentage}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.fatPercentageRange}}</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.waistToHipRatio>=0&&data.waistToHipRatio<data.waistToHipRatioLow?'low':data.waistToHipRatio>=data.waistToHipRatioLow&&data.waistToHipRatio<=data.waistToHipRatioHeight?'normal':'height']"></span><span>{{data.waistToHipRatio}}</span></td>
            <td width="199px" class="zhengchang">{{data.waistToHipRatioRange}}</td>
          </tr>
          <tr>
            <td width="824px"><span :class="['Tspan',data.visceralFatArea>=0&&data.visceralFatArea<data.visceralFatAreaLow?'low':data.visceralFatArea>=data.visceralFatAreaLow&&data.visceralFatArea<=data.visceralFatAreaHeight?'normal':'height']"></span><span>{{data.visceralFatArea}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.visceralFatAreaRange}}</td>
          </tr>
        </table>
      </div>
      <div class="table fourTable">
        <table cellspacing="9">
          <tr>
            <td width="400px">{{data.targetWeight}}</td>
            <td width="200px"></td>
            <td width="415px">{{data.weightControl}}</td>
          </tr>
          <tr>
            <td width="400px">{{data.muscleControl}}</td>
            <td width="200px"></td>
            <td width="415px">{{data.fatControl}}</td>
          </tr>
          <tr>
            <td colspan="3">{{data.basalMetabolism}}</td>
          </tr>
        </table>
      </div>
      <div class="fiveTable">
        <table cellspacing="16">
          <tr>
            <td>{{data.dailyOperation}}小时/周</td>
            <td>{{data.lowExercise}}小时/周</td>
            <td>{{data.moderateExercise}}小时/周</td>
            <td>{{data.highExercise}}小时/周</td>
          </tr>
        </table>
      </div>
      <div class="sixTable">
        <table cellspacing="5">
          <tr>
            <td>{{data.dailyEnergyIntake}}kcal</td>
          </tr>
          <tr>
            <td>{{data.dailyProteinIntake}}g</td>
          </tr>
          <tr>
            <td>{{data.dailyFatIntake}}g</td>
          </tr>
          <tr>
            <td>{{data.dailyCarbohydrateIntake}}kg</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="right">
      <!-- 躯干 -->
      <div class="Tbody">{{data.trunkMuscles}}kg</div>
      <div class="oneTable">
        <table cellspacing="9">
          <tr height="565px">
            <td valign="top">{{data.leftArmMuscle}}kg</td>
            <td valign="top" style="padding-left:195px">{{data.rightArmMuscle}}kg</td>
          </tr>
          <tr height="400px">
            <td valign="top">{{data.leftLegMuscle}}kg</td>
            <td valign="top" style="padding-left:205px">{{data.rightLegMuscles}}kg</td>
          </tr>
        </table>
      </div>
      <div class="font twoTable">
        <table cellspacing="9">
          <tr>
            <td valign="top" width="310px"><span v-show="data.bodySizeDeterminationStatus=='1'">√</span></td>
            <td valign="top" width="280px"><span v-show="data.bodySizeDeterminationStatus=='2'">√</span></td>
            <td valign="top" width="280px"><span v-show="data.bodySizeDeterminationStatus=='3'">√</span></td>
          </tr>
          <tr>
            <td valign="top"><span v-show="data.bodySizeDeterminationStatus=='4'">√</span></td>
            <td valign="top"><span v-show="data.bodySizeDeterminationStatus=='5'">√</span></td>
            <td valign="top"><span v-show="data.bodySizeDeterminationStatus=='6'">√</span></td>
          </tr>
          <tr>
            <td valign="top"><span v-show="data.bodySizeDeterminationStatus=='7'">√</span></td>
            <td valign="top"><span v-show="data.bodySizeDeterminationStatus=='8'">√</span></td>
            <td valign="top"><span v-show="data.bodySizeDeterminationStatus=='9'">√</span></td>
          </tr>
        </table>
      </div>
      <div class="font threeTable">
        <ul>
          <li><span v-show="data.upperLimbBalanceStatus=='2'">√</span></li>
          <li><span v-show="data.upperLimbBalanceStatus=='1'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.lowerLimbBalanceStatus=='2'">√</span></li>
          <li><span v-show="data.lowerLimbBalanceStatus=='1'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.developedUpperLimbsStatus=='1'">√</span></li>
          <li><span v-show="data.developedUpperLimbsStatus=='2'">√</span></li>
          <li><span v-show="data.developedUpperLimbsStatus=='3'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.developedLowerLimbsStatus=='1'">√</span></li>
          <li><span v-show="data.developedLowerLimbsStatus=='2'">√</span></li>
          <li><span v-show="data.developedLowerLimbsStatus=='3'">√</span></li>
        </ul>
      </div>
      <div class="font fourTable">
        <ul>
          <li><span v-show="data.proteinStatus=='1'">√</span></li>
          <li><span v-show="data.proteinStatus=='2'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.inorganicSaltStatus=='1'">√</span></li>
          <li><span v-show="data.inorganicSaltStatus=='2'">√</span></li>
        </ul>
        <ul>
          <li><span v-show="data.fatStatus=='1'">√</span></li>
          <li><span v-show="data.fatStatus=='2'">√</span></li>
          <li><span v-show="data.fatStatus=='3'">√</span></li>
        </ul>
      </div>
      <div class="fiveTable">
        <table cellspacing="9">
          <tr>
            <td>{{data.impedance[0]}}</td>
            <td>{{data.impedance[1]}}</td>
            <td>{{data.impedance[2]}}</td>
            <td>{{data.impedance[3]}}</td>
            <td>{{data.impedance[4]}}</td>
          </tr>
          <tr>
            <td>{{data.impedance[5]}}</td>
            <td>{{data.impedance[6]}}</td>
            <td>{{data.impedance[7]}}</td>
            <td>{{data.impedance[8]}}</td>
            <td>{{data.impedance[9]}}</td>
          </tr>
          <tr>
            <td>{{data.impedance[10]}}</td>
            <td>{{data.impedance[11]}}</td>
            <td>{{data.impedance[12]}}</td>
            <td>{{data.impedance[13]}}</td>
            <td>{{data.impedance[14]}}</td>
          </tr>
        </table>
      </div>
      <div :class="[data.isPrintingBodyAge==='2'?'button':'']">
        <span style="margin-left: 319px;" v-show="data.isPrintingBodyAge==='1'">{{data.waistline}}</span>
        <span style="margin-left: 90px;" v-show="data.isPrintingBodyAge==='1'">{{data.bodyAge}}</span>
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
    // this.$bridge.registerHandler('getData', (data, responseCallback) => {
    //   var res = JSON.parse(data);
    //   this.bgImg.backgroundImage = res.isPrintPaper == 2 ? 'url(' + url + ')' : '#FFF';
    //   res.impedance = JSON.parse(res.impedance);
    //   this.data = {
    //     ...res,
    //     weightLow: res.weightRange.split('~')[0],
    //     weightHeight: res.weightRange.split('~')[1],
    //     skeletalMuscleMassLow: res.skeletalMuscleMassRange.split('~')[0],
    //     skeletalMuscleMassHeight: res.skeletalMuscleMassRange.split('~')[1],
    //     bodyFatMassLow: res.bodyFatMassRange.split('~')[0],
    //     bodyFatMassHeight: res.bodyFatMassRange.split('~')[1],
    //     bodyMassIndexLow: res.bodyMassIndexRange.split('~')[0],
    //     bodyMassIndexHeight: res.bodyMassIndexRange.split('~')[1],
    //     fatPercentageLow: res.fatPercentageRange.split('~')[0],
    //     fatPercentageHeight: res.fatPercentageRange.split('~')[1],
    //     waistToHipRatioLow: res.waistToHipRatioRange.split('~')[0],
    //     waistToHipRatioHeight: res.waistToHipRatioRange.split('~')[1],
    //     visceralFatAreaLow: res.visceralFatAreaRange.split('~')[0],
    //     visceralFatAreaHeight: res.visceralFatAreaRange.split('~')[1],
    //   };
    //   responseCallback(data);
    // });

    //模拟数据
    let res = {
      age: 25,
      basalMetabolism: 2006.1,
      bodyAge: 23.3,
      bodyFatMass: -0.8,
      bodyFatMassRange: '0.1~0.1',
      bodyMassIndex: 27.5,
      bodyMassIndexRange: '18.5~24.0',
      bodySizeDeterminationStatus: 9,
      dailyCarbohydrateIntake: 250.0,
      dailyEnergyIntake: 1786.7,
      dailyFatIntake: 55.0,
      dailyOperation: 39.2,
      dailyProteinIntake: 77.8,
      date: '2020-08-10 20:39:21',
      developedLowerLimbsStatus: 2,
      developedUpperLimbsStatus: 2,
      fatControl: 1.0,
      fatPercentage: 0.0,
      fatPercentageRange: '10.0~20.0',
      fatStatus: 1,
      height: 165.0,
      highExercise: 7.8,
      idNumber: '1343357715',
      impedance:
        '[46.91,46.94,2.3,46.58,46.58,49.3,49.28,2.27,48.98,48.84,24.18,24.165,0.4,24.93,24.13,100.33]',
      inorganicSalt: 15.23,
      inorganicSaltRange: '0.4~0.48',
      inorganicSaltStatus: 2,
      isPrintPaper: 2,
      isPrintingBodyAge: 2,
      isPrintingCompany: 2,
      leanBodyMass: 75.7,
      leftArmMuscle: 9.54,
      leftLegMuscle: 12.25,
      lowExercise: 15.7,
      lowerLimbBalanceStatus: 1,
      moderateExercise: 11.8,
      muscleControl: -59.9,
      muscleMass: 60.5,
      protein: 8.8,
      proteinRange: '0.1~0.1',
      proteinStatus: 2,
      rightArmMuscle: 9.54,
      rightLegMuscles: 12.2,
      sex: 1,
      skeletalMuscleMass: 26.3,
      skeletalMuscleMassRange: '0.3~0.4',
      targetWeight: 15.9,
      totalBodyScore: 83.0,
      totalMoisture: 51.7,
      totalMoistureRange: '0.4~0.5',
      trunkMuscles: -12.35,
      upperLimbBalanceStatus: 1,
      visceralFatArea: 73.2,
      visceralFatAreaRange: '0.0~100.0',
      waistToHipRatio: 0.82,
      waistToHipRatioRange: '0.75~0.85',
      waistline: 84.68,
      weight: 74.9,
      weightControl: -59.0,
      weightRange: '18.7~25.3',
    };
    res.impedance = JSON.parse(res.impedance);
    this.data = {
      ...res,
      weightLow: res.weightRange.split('~')[0],
      weightHeight: res.weightRange.split('~')[1],
      skeletalMuscleMassLow: res.skeletalMuscleMassRange.split('~')[0],
      skeletalMuscleMassHeight: res.skeletalMuscleMassRange.split('~')[1],
      bodyFatMassLow: res.bodyFatMassRange.split('~')[0],
      bodyFatMassHeight: res.bodyFatMassRange.split('~')[1],
      bodyMassIndexLow: res.bodyMassIndexRange.split('~')[0],
      bodyMassIndexHeight: res.bodyMassIndexRange.split('~')[1],
      fatPercentageLow: res.fatPercentageRange.split('~')[0],
      fatPercentageHeight: res.fatPercentageRange.split('~')[1],
      waistToHipRatioLow: res.waistToHipRatioRange.split('~')[0],
      waistToHipRatioHeight: res.waistToHipRatioRange.split('~')[1],
      visceralFatAreaLow: res.visceralFatAreaRange.split('~')[0],
      visceralFatAreaHeight: res.visceralFatAreaRange.split('~')[1],
    };
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
  font-weight: bolder;
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
          height: 6px;
          background: black;
          display: block;
          float: left;
          margin: 30px 20px 0 0;
          // padding: 0 10px;
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
        line-height: 54px;
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
      margin-top: 190px;
      tr {
        height: 60px;
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
      z-index: 9999;
    }
    .btn {
      margin-top: 26px;
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

