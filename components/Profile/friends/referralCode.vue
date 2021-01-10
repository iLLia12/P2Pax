<template>
    <el-card class="referral-code-wrap" :body-style="{ borderRadius:'0'}">
        <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <p class="title">Referral code</p>
            </el-col>
        </el-row>
        <p class="referral-code">71a2fd54f05e2328a56a54c13b3bf2a31</p>
    </el-card>
</template>

<script>
    export default {
        name: "referralCode"
    }
</script>

<style lang="scss" scoped>
    .title {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: $--color-text-secondary;
    }
    .referral-code-wrap {
        margin-top: 10px;
        .referral-code {
            color: $--color-text-secondary;
        }
    }
</style>
