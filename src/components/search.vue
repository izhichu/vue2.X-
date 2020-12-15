<template>
    <div>
        <van-search placeholder="请输入搜索关键词" @click="toSearch"/>
    </div>
</template>

<script>
export default {
    methods:{
        toSearch(){
            console.log("666")
            this.$router.push('/searchPage')
        }
    }
}
</script>

