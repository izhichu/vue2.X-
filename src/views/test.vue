<!-- <template>
  <div class="home"></div>
</template>

<script>

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log("666");
    //设置超时时间
    axios.defaults.timeout = 10000;
    // post请求头
    axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded;charset=UTF-8";
    axios.get("api/wechat/nvsheng").then((res)=>{
      console.log(res)
    })
  },
};
</script> -->


