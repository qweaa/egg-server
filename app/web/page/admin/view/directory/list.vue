<template>
  <div>directory list page</div>
</template>
<script>
export default {
  data() {
    // this.$store.dispatch("app/updateAppData", {
    //   url: "哈哈"
    // });
    return {};
  },
  mounted() {
    // /nlp/wechat/activity/video/listNewest
    // /api/admin/testHttp
    this.$http
      .get("/api/admin/testHttp")
      .then((data) => {
        console.log("测试请求：", data);
      })
      .catch((err) => {
        console.log("请求错误：", err);
      });
  }
};
</script>
