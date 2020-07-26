<template>
  <div class="container" v-if="data">
    <div class="title">{{data.artTitle}}</div>
    <div class="subtitle">
      <span style="margin-right: 20px;color:#000">{{data.classifyName}}</span>
      <span>{{data.artDate}}</span>
    </div>
    <hr style="margin:10px">
    <div class="artical" v-html="data.artContent"></div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import { articleNews } from '../../api';
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
  margin: 16px 0px 32px 0px;
  text-align: center;
  span:first {
  }
}
/deep/.artical {
  line-height: 2;
  img {
    width: 100%;
  }
}
</style>

