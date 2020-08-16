<template>
  <div class="container" v-if="data">
    <div class="title">{{data.articleTitle}}</div>
    <div class="subtitle">
      <div class="left">
        <img :src="data.userAvatarurl" alt="" srcset="">
      </div>
      <div class="right">
        <p>{{data.articleAuthorName}}</p>
        <p>
          <span class="role">
            <span class="cole"></span>
            {{data.roleName}}
          </span>
          <span>{{data.userIntro}}</span>
        </p>
      </div>
    </div>
    <div class="date">{{data.createTime.split(' ')[0]}}</div>
    <template v-if="data.articleImgBanner">
      <img :src="data.articleImgBanner" class="banner">
    </template>
    <div class="artical" v-html="data.articleContent" @click="imageChgange($event)"></div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import { bbsDetails } from "../../api";
import { ImagePreview } from "vant";
import "vant/lib/image-preview/style";
export default {
  name: "home",
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
          document.title = res.data.data.articleTitle;
        }
      });
    },
    imageChgange(e) {
      console.log(e);
      if (e.target.nodeName == "IMG") {
        console.log(e.target.currentSrc);
        ImagePreview([e.target.currentSrc]);
      } else {
        return;
      }
    },
  },
  beforeCreate() {
    document.title = '论坛详情';
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #303030;
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
  color: #efefef;
  padding: 15px;
}
.subtitle {
  font-size: 14px;
  padding: 3px 15px 15px 15px;
  overflow: hidden;
  .left {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
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
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #eeeeee;
    }
    p:last-child {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #aeaeae;
      .role {
        background: rgba(68, 211, 159, 1);
        border-radius: 4px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: bold;
        padding-left: 5px;
        padding-right: 3px;
        color: rgba(255, 255, 255, 1);
        margin-right: 10px;
        .cole {
          display: inline-block;
          vertical-align: middle;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background-color: #fff;
          margin-right: 5px;
        }
      }
    }
  }
}
.date {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  font-style: italic;
  color: #eaeaea;
  padding-left: 15px;
  margin-bottom: 15px;
}
.banner {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 15px;
  margin-bottom: 20px;
}
/deep/.artical {
  line-height: 2;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(239, 239, 239, 1);
  line-height: 19px;
  padding: 0px 15px 15px 15px;
  img {
    width: 100%;
  }
}
</style>

