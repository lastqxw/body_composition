<!--
 * @Author: your name
 * @Date: 2020-08-19 21:58:16
 * @LastEditTime: 2020-09-24 10:58:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ido85-pay_web_site-pay_web_site-paymentSystem/src/views/home/home.vue
-->
<template>
  <div class="container" v-if="data">
    <div class="title">{{data.articleTitle}}</div>
    <div class="subtitle">
      <span class="left">{{data.createUser}}</span>
      <span>{{data.createTime.split(' ')[0]}}</span>
    </div>
    <div class="artical" v-html="data.articleContent" @click="imageChgange($event)"></div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import { details } from '../../api';
import { ImagePreview } from 'vant';
import 'vant/lib/image-preview/style';
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
      details(id).then((res) => {
        console.log(res);
        if (res.data.type == 0) {
          this.data = res.data.data;
          document.title = res.data.data.articleTitle;
        }
      });
    },
    imageChgange(e) {
      console.log(e);
      if (e.target.nodeName == 'IMG') {
        console.log(e.target.src);
        ImagePreview([e.target.currentSrc || e.target.src]);
      } else {
        return;
      }
    },
  },
  beforeCreate() {
    document.title = '文章详情';
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow: auto;
  background-color: transparent;
  overflow-x: hidden;
  img {
    width: 100%;
  }
}
.title {
  font-size: 20px;
  font-family: PingFang SC;
  line-height: 25px;
  font-weight: bold;
  color: rgba(27, 27, 27, 1);
  padding: 15px;
}
.subtitle {
  font-size: 14px;
  padding: 15px;
  font-size: 12px;
  font-family: PingFang SC;

  font-weight: 400;
  font-style: italic;
  color: rgba(138, 138, 138, 1);
  .left {
    color: #515151;
    margin-right: 10px;
    font-style: initial;
  }
}
/deep/.artical {
  padding: 0px 15px;
  line-height: 23px;
  img {
    width: 100%;
  }
}
</style>

