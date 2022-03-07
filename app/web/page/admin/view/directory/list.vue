<template>
  <div>
    <div>directory list page</div>
    <div class="list">
      <div v-for="(item, index) of list" :key="index" class="list__item">
        <div class="mask">
          <div @click="toFileList(item.id)" class="mask__top">查看</div>
          <div class="mask__bottom">
            <div @click="toDirectoryUpdate(item.id)" class="mask__b__left">
              修改
            </div>
            <div @click="toFileUpload(item.id)" class="mask__b__right">
              上传
            </div>
          </div>
          <i class="el-icon-close"></i>
        </div>
        <img src="~asset/images/folder.svg" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // this.$store.dispatch("app/updateAppData", {
    //   url: "哈哈"
    // });
    return {
      list: [
        {
          id: 1,
          name: "图片"
        },
        {
          id: 2,
          name: "视频"
        },
        {
          id: 3,
          name: "两周年活动"
        },
        {
          id: 4,
          name: "来电助手"
        },
        {
          id: 5,
          name: "联通助理"
        }
      ]
    };
  },
  mounted() {
    // /nlp/wechat/activity/video/listNewest
    // /api/admin/testHttp
    // this.$http
    //   .get("/api/admin/testHttp")
    //   .then((data) => {
    //     console.log("测试请求：", data);
    //   })
    //   .catch((err) => {
    //     console.log("请求错误：", err);
    //   });
  },
  methods: {
    toFileList(id) {
      this.$router.push(`/directory/file?directoryId=${id}`);
    },
    toDirectoryUpdate(id) {
      this.$router.push(`/directory/update?directoryId=${id}`);
    },
    toFileUpload(id) {
      this.$router.push(`/file/upload?directoryId=${id}`);
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
.list__item {
  position: relative;
  border-radius: 10px;
  padding: 12px 12px 24px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 180px;
  transition: box-shadow 0.3s;
  margin: 12px;
  > img {
    width: 120px;
  }
  > p {
    font-size: 16px;
    color: #333;
  }
  .mask {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .mask__top {
    height: 140px;
    background-color: rgba(0, 0, 0, 0.6);
    line-height: 140px;
    text-align: center;
  }
  .mask__bottom {
    height: 40px;
    display: flex;
    > div {
      line-height: 40px;
      text-align: center;
      flex: 1;
      text-align: center;
    }
  }
  .mask__b__left {
    background-color: rgba(64, 158, 255, 0.8);
  }
  .mask__b__left:hover {
    background-color: rgba(64, 158, 255, 1);
  }
  .mask__b__right {
    background-color: rgba(103, 194, 58, 0.8);
  }
  .mask__b__right:hover {
    background-color: rgba(103, 194, 58, 1);
  }
  .el-icon-close {
    position: absolute;
    font-size: 20px;
    color: #f56c6c;
    top: 6px;
    right: 6px;
    opacity: 0.6;
  }
  .el-icon-close:hover {
    opacity: 1;
  }
}
.list__item:hover {
  cursor: pointer;
  box-shadow: 0 0 10px #ccc;
  .mask {
    opacity: 1;
  }
}
</style>
