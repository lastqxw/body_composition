<template>
  <div class="container" v-if="data">
    <div class="title">{{data.articleTitle}}</div>
    <div style="text-align: right;width:100%">{{data.createTime}}</div>
    <div class="subtitle">
      <div class="left">
        <img :src="data.userAvatarurl" alt="" srcset="">
      </div>
      <div class="right">
        <p>{{data.articleAuthorName}}</p>
        <p>{{data.userIntro}}</p>
      </div>
    </div>
    <hr style="margin:10px">
    <img :src="data.articleImgBanner" style="width:100%;margin-bottom:10px">
    <div class="artical" v-html="data.articleContent"></div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import { bbsDetails } from '../../api';
export default {
  name: 'home',
  data() {
    return {
      data: null,
    };
  },
  created() {
    let id = this.$route.query.id;
    let token = this.$route.params.token;
    this.getDetails(id, token);
  },
  methods: {
    getDetails(id, token) {
      bbsDetails(id).then((res) => {
        console.log(res);
        if (res.data.type == 0) {
          this.data = res.data.data;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 15px;
  overflow: auto;
  background-color: #fff;
  img {
    width: 100%;
  }
}
.title {
  color: #000;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
}
.subtitle {
  font-size: 14px;
  margin: 16px 0px;
  overflow: hidden;
  .left {
    display: inline-block;
    vertical-align: middle;
    margin-right: 14px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }
  .right {
    display: inline-block;
    vertical-align: middle;
    line-height: 28px;
    p:first-child {
      font-size: 14px;
      color: #000;
    }
    p:last-child {
      font-size: 12px;
    }
  }
}
/deep/.artical {
  line-height: 2;
  img {
    width: 100%;
  }
}
</style>

