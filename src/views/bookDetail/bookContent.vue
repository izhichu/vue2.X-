<template>
  <div class="content">
    <van-nav-bar :title="bookInfo.bookName" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="wap-home" size="18" @click="toIndex" />
      </template>
    </van-nav-bar>
    <van-cell>
      <div v-html="this.content"></div>
      <div class="tiaozhuan">
        <span @click="lastChapter" :class="isGray?'gray':''">上一章</span>
        <span @click="onClickLeft">目录</span>
        <span @click="nextChapter" :class="isGray1?'gray':''">下一章</span>
      </div>
    </van-cell>
  </div>
</template>

<script>
import { bookContent } from "../../utils/api";
import axiosGetHttp from "../../utils/axiosGetHttp";
export default {
  data() {
    return {
      bookId: this.$route.params.bookId,
      id: this.$route.params.id,
      content: "",
      bookInfo: "",
      isGray: false,
      isGray1: false
    };
  },
  created() {
    if (this.id == 1) {
      this.isGray = !this.isGray;
    };
    if (this.id == this.bookInfo.chapterCount) {
      this.isGray1 = !this.isGray1;
    };
    console.log(this.id,this.bookInfo.chapterCount,666)
    this.getBookContent();
  },
  watch: {
    $route: function(to, from) {
      window.pageYOffset = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  methods: {
    async getBookContent() {
      let res = await axiosGetHttp(
        "get",
        bookContent + this.bookId + "/" + this.id
      );
      if (res.msg == "ok") {
        let book = res.body;
        this.content = book.content;
        this.bookInfo = book.bookInfo;
        console.log(this.content);
      }
    },
    onClickLeft() {
      this.$router.push(`/bookMulu/${this.bookId}`);
    },
    lastChapter() {
      if (this.id > 1) {
        this.id = this.id - 1;
        if (this.id == 1) {
          this.isGray = !this.isGray;
        }
        this.$router.push(`/bookContent/${this.bookId}/${this.id}`);
        this.isGray1=false;
        this.getBookContent();
      }
    },
    nextChapter() {
      if (this.id < this.bookInfo.chapterCount) {
        let id = this.id
        id++
        this.id = id
        if (this.id == this.bookInfo.chapterCount) {
          this.isGray1 = !this.isGray1;
        }
        this.$router.push(`/bookContent/${this.bookId}/${this.id}`);
        this.isGray=false;
        this.getBookContent();
      }
    },
    toIndex() {
      this.$router.push(`/`);
    },
  }
};
</script>

<style lang="scss" scoped>
/deep/.van-nav-bar {
  background-color: white;
  .van-nav-bar__left {
    .van-icon {
      color: black;
    }
  }
  .van-nav-bar__right {
    left: 35px;
    .van-icon {
      color: black;
    }
  }
  .van-nav-bar__title {
    font-weight: 700;
    color: black;
  }
}
/deep/.van-cell {
  background-color: #f5f5f5;
  margin-top: 46px;
  .background-img-center {
    background: center center no-repeat;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .zhangyue-top-full-c {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .zhangyue-tablebody {
    width: 100%;
    margin-top: 30px;
  }
  .biaoti,
  .copyright {
    padding-left: 5px;
    font-size: 12px;
    border: 1px solid lightgray;
  }
  .text-title-1,
  .text-title-1-c {
    font-size: 16px;
    margin: 10px 0 20px 0;
  }
  .bodytext {
    font-size: 18px;
    margin: 10px 0 10px 0;
    text-indent: 36px;
  }

  .tiaozhuan {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0 20px 0;
    span {
      width: 65px;
      border: 1px solid black;
      text-align: center;
      border-radius: 15px;
      padding: 1px 5px 1px 5px;
    }
  }
}
.gray {
  border: 1px solid lightgray !important;
  color: lightgray;
}
</style>