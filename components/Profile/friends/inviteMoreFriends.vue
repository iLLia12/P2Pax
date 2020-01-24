<template>
    <el-card class="invite-more-friends" :body-style="{ borderRadius:'0'}">
        <p class="title">Invite via e-mail</p>
        <el-row class="input-wrap">
            <el-col>
                <el-input placeholder="Friend`s email" v-model="input"></el-input>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "inviteMoreFriends",
        data:() => ({
            input:''
        })
    }
</script>

<style lang="scss" scoped>

    @import "../../../assets/scss/variables";

    .title {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: $--color-text-secondary;
    }

    .invite-more-friends {
        margin-top: 10px;
        .input-wrap {
            margin-top: 10px;
        }
    }
</style>
