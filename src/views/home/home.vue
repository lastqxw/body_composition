<template>
  <div>
    <div class="artical" v-html="data">

    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
export default {
  name: 'home',
  data() {
    return {
      data: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    let token = this.$route.params.token;
    this.getDetails(id, token);
  },
  methods: {
    getDetails(id, token) {
      let params = {
        id,
      };
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

