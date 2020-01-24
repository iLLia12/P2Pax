<template>
    <el-card class="referral-link-wrap" :body-style="{ borderRadius:'0'}">
        <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <p class="title">Referral link</p>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="copy-icon-wrap">
                <i class="el-icon-document-copy" @click="copyToClipboard"></i>
            </el-col>
        </el-row>
        <el-input
            id="referralLink"
            class="referral-link"
            placeholder="Please input"
            v-model="referralLinkInput"
            :disabled="true">
        </el-input>
    </el-card>
</template>

<script>
    export default {
        name: "referralLink",
        data:() => ({
            referralLinkInput:'https://p2pax.com/?utm_source=71a2fd54f05e2328a56a54c13b3bf2a31a2fd54f05e2328a56a54c13b3bf2a3'
        }),
        methods:{
            copyToClipboard(){
                let copyText = document.getElementById("referralLink");
                copyText.select();
                document.execCommand("copy");
                this.$message({
                    message: 'Copied to clipboard'
                });
            },
        }
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

    .referral-link-wrap {
        margin-top: 10px;
        .referral-link {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            color: $--color-text-secondary;
            > input {
                width: 100%;
            }
        }
        .copy-icon-wrap {
            display: flex;
            justify-content: flex-end;
            .item {
                width: 100px;
            }
        }
        .el-icon-document-copy {
            cursor: pointer;
        }
    }
</style>
