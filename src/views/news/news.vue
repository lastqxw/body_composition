<!--
 * @Author: your name
 * @Date: 2020-07-29 19:15:21
 * @LastEditTime: 2020-09-24 10:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ido85-pay_web_site-pay_web_site-paymentSystem/src/views/news/news.vue
-->
<template>
  <div class="container" v-if="data">
    <div class="title">{{data.artTitle}}</div>
    <div class="subtitle">
      <span class="left">{{data.classifyName}}</span>
      <span>{{data.artDate.split(' ')[0]}}</span>
    </div>
    <img :src="data.imgBanner" class="banner">
    <div class="artical" v-html="data.artContent" @click="imageChgange($event)"></div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import { articleNews } from '../../api';
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
      articleNews(id).then((res) => {
        console.log(res);
        if (res.data.type == 0) {
          this.data = res.data.data;
          document.title = res.data.data.artTitle;
        }
      });
    },
    imageChgange(e) {
      console.log(e);
      if (e.target.nodeName == 'IMG') {
        console.log(e.target.currentSrc);
        ImagePreview([e.target.currentSrc || e.target.src]);
      } else {
        return;
      }
    },
  },
  beforeCreate() {
    document.title = '新闻详情';
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: transparent;
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
.banner {
  width: 100%;
  margin: 16px 0px 20px 0px;
}
/deep/.artical {
  padding: 0px 15px;
  font-size: 16px;
  font-family: PingFang SC;
  color: rgba(27, 27, 27, 1);
  line-height: 23px;
  img {
    width: 100%;
  }
}
</style>

