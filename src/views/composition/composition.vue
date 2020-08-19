<template>
  <div :class="['mainBody',data.isPrintPaper=='1'?'mainBodyOther':'']" :style="bgImg">
    <div :class="[data.isPrintPaper=='1'?'header':'header1']">
      <div class="logo" v-show="data.isPrintingCompany=='1'">{{data.companyName}}</div>
    </div>
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
      <!-- 肌肉脂肪分析 -->
      <div class="table twoTable">
        <table cellspacing="9">
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.weightProgress+'%'}"></span>
              <span>{{data.weight}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.weightRange}}</td>
          </tr>
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.skeletalMuscleMassProgress+'%'}"></span>
              <span>{{data.skeletalMuscleMass}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.skeletalMuscleMassRange}}</td>
          </tr>
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.bodyFatMassProgress+'%'}"></span>
              <span>{{data.bodyFatMass}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.bodyFatMassRange}}</td>
          </tr>
        </table>
      </div>
      <!-- 肥胖分析 -->
      <div class="table twoTable" style="margin-top:180px">
        <table cellspacing="9">
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.bodyMassIndexProgress+'%'}"></span>
              <span>{{data.bodyMassIndex}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.bodyMassIndexRange}}</td>
          </tr>
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.fatPercentageProgress+'%'}"></span>
              <span>{{data.fatPercentage}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.fatPercentageRange}}</td>
          </tr>
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.waistToHipRatioProgress+'%'}"></span>
              <span>{{data.waistToHipRatio}}</span>
            </td>
            <td width="199px" class="zhengchang">{{data.waistToHipRatioRange}}</td>
          </tr>
          <tr>
            <td width="824px">
              <span class="Tspan" :style="{width:data.visceralFatAreaProgress+'%'}"></span>
              <span>{{data.visceralFatArea}}</span>
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
      <div :class="[data.isPrintingBodyAge=='2'?'button':'']">
        <span style="margin-left: 319px;" v-show="data.isPrintingBodyAge=='1'">{{data.waistline}}</span>
        <span style="margin-left: 90px;" v-show="data.isPrintingBodyAge=='1'">{{data.bodyAge}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import dayjs from 'dayjs'
  const url = require('../../../public/backgroundImg.png')
  export default {
    name: 'home',
    data() {
      return {
        bgImg: {
          backgroundImage: 'url(' + url + ')'
        },
        data: null
      }
    },
    created() {
      // this.getData();
      // js注册方法供原生调用;
      // this.$bridge.registerHandler('getData', (data, responseCallback) => {
      //   var res = JSON.parse(data);
      //   this.bgImg.backgroundImage = res.isPrintPaper == 2 ? 'url(' + url + ')' : '#FFF';
      //   res.impedance = res.impedance.split("'")[0].split('[')[1].split(']')[0].split(',');
      //   this.data = { ...res };
      //   responseCallback(data);
      // });
      // }
      //模拟数据
      let res = {
        age: 44,
        basalMetabolism: 1440.9,
        bodyAge: 51.2,
        bodyFatMass: 51.0,
        bodyFatMassProgress: 100,
        bodyFatMassRange: '7.0~14.0',
        bodyMassIndex: 31.8,
        bodyMassIndexProgress: 55,
        bodyMassIndexRange: '18.5~24.0',
        bodySizeDeterminationStatus: 3,
        companyName: 'hhhhh公司',
        dailyCarbohydrateIntake: 217.0,
        dailyEnergyIntake: 1509.1,
        dailyFatIntake: 53.0,
        dailyOperation: -0.3,
        dailyProteinIntake: 72.4,
        date: '2020-08-19 09:37:06',
        developedLowerLimbsStatus: 2,
        developedUpperLimbsStatus: 2,
        fatControl: -40.5,
        fatPercentage: 50.7,
        fatPercentageProgress: 79,
        fatPercentageRange: '10.0~20.0',
        fatStatus: 3,
        height: 178.0,
        highExercise: -0.1,
        idNumber: '0000021444',
        impedance:
          '[459.9,382.4,28.0,466.4,461.4,494.0,407.8,21.8,497.3,491.4,473.6,391.7,19.2,481.0,474.1,965.4]',
        inorganicSalt: 3.5,
        inorganicSaltRange: '3.64~4.44',
        inorganicSaltStatus: 1,
        isPrintPaper: 1,
        isPrintingBodyAge: 2,
        isPrintingCompany: 1,
        leanBodyMass: 49.6,
        leftArmMuscle: 2.96,
        leftLegMuscle: 7.11,
        lowExercise: -0.1,
        lowerLimbBalanceStatus: 1,
        moderateExercise: -0.1,
        muscleControl: 9.1,
        muscleMass: 46.1,
        protein: 9.8,
        proteinRange: '10.6~13.0',
        proteinStatus: 1,
        rightArmMuscle: 2.56,
        rightLegMuscles: 7.09,
        sex: 1,
        skeletalMuscleMass: 27.4,
        skeletalMuscleMassProgress: 16,
        skeletalMuscleMassRange: '29.9~36.5',
        targetWeight: 69.2,
        totalBodyScore: 46.4,
        totalMoisture: 36.3,
        totalMoistureRange: '39.1~47.7',
        trunkMuscles: 21.34,
        upperLimbBalanceStatus: 2,
        visceralFatArea: 197.8,
        visceralFatAreaProgress: 49,
        visceralFatAreaRange: '0.0~100.0',
        waistToHipRatio: 0.97,
        waistToHipRatioProgress: 52,
        waistToHipRatioRange: '0.75~0.85',
        waistline: 108.81,
        weight: 100.6,
        weightControl: -31.4,
        weightProgress: 49,
        weightRange: '59.2~80.2'
      }
      res.impedance = res.impedance
        .split("'")[0]
        .split('[')[1]
        .split(']')[0]
        .split(',')
      this.data = { ...res }
    },
    methods: {
      // JS调用原生方法
      getData() {
        let that = this
        this.$bridge.callHandler('getData', {}, (data, responseCallback) => {
          alert(data, '接收到的数据')
          var res = JSON.parse(data)
          this.data = res
          responseCallback(data)
        })
      }
    }
  }
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
    .header1 {
      position: absolute;
      width: 2480px;
      height: 280px;
      background: transparent;
    }
    .logo {
      float: right;
      color: #2d77bd;
      font-size: 80px;
      height: 250px;
      background: #fff;
      padding-top: 150px;
    }
    .headerOne {
      padding-top: 290px;
      padding-left: 172px;
    }
    .headerTwo {
      padding-top: 30px;
      span {
        display: inline-block;
        vertical-align: middle;
      }
      .gender {
        margin-left: 210px;
      }
      .stature {
        margin-left: 280px;
      }
      .weight {
        margin-left: 180px;
      }
      .age {
        margin-left: 194px;
      }
      .time {
        margin-left: 800px;
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
        margin-top: 100px;
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
        margin-top: 183px;
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
        margin-left: 22px;
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
          margin-left: 60px;
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
        margin-left: 160px;
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

