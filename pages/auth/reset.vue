<template>
    <div class="content-wrap reset-pass-outer-wrap">
        <el-row class="content-inner-wrap reset-pass-wrap">
            <el-col :xs="24" :sm="24" :md="{offset:7, span:10}" :lg="{offset:9, span:6}" :xl="{offset:9, span:6}" class="inner-container">
                <el-card class="faq-wrap">
                    <el-form :label-position="labelPosition" :model="formLabelAlign">
                        <p class="pass-res-title">Password reset</p>
                        <el-form-item label="">
                            <el-input placeholder="Email" v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-row>
                        <el-button style="width: 100%" type="primary" plain>Password reset</el-button>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "reset",
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                }
            };
        }
    }
</script>

<style lang="scss">
    .reset-pass-outer-wrap {
        height: 59.8vh !important;
    }
    .reset-pass-wrap {
        margin-top: 40px;
        .pass-res-title {
            text-align: center;
            color: $--color-secondary;
            margin-bottom: 10px;
        }
    }
</style>
