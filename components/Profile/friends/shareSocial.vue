<template>
    <el-card class="share-social-wrap" :body-style="{ borderRadius:'0'}">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <p class="title">Share in your social</p>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="icons-wrap">
                <div class="icon icon_facebook_a"></div>
                <div class="icon icon_twitter_a"></div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "shareSocial"
    }
</script>

<style lang="scss" scoped>

    @import "assets/scss/variables";

    .title {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: $--color-text-secondary;
    }

    .share-social-wrap {
        margin-top: 10px;
        .icon {
            width: 40px;
            height: 40px;
            display: inline-block;
            margin-right: 10px;
            cursor: pointer;
        }
        .icons-wrap {
            margin-top: 10px;
            display: flex;
        }
    }

</style>
