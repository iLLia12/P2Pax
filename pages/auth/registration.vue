<template>
    <div class="content-wrap">
        <el-row class="reg-wrap">
            <el-col :xs="24" :sm="24" :md="{offset:7, span:10}" :lg="{offset:8, span:7}" :xl="{offset:9, span:6}" class="inner-container">
                <el-card class="reg-form-wrap">
                    <h2 class="sign_up_title">Sign up</h2>
                    <p class="sign_up_info">Register to start buying and selling cryptocurrency</p>
                    <el-form :label-position="labelPosition" :model="form">
                        <el-form-item label="">
                            <el-input placeholder="Email" v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input placeholder="User name" v-model="form.region"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input placeholder="Password" v-model="form.type"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input placeholder="Password confirmation" v-model="form.type"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input placeholder="Referral code" v-model="form.type"></el-input>
                        </el-form-item>
                        <el-form-item label="" label-position="left" class="terms-wrap" prop="type">
                            <el-checkbox v-model="form.accept" label="" name="type"></el-checkbox>
                            <span class="reg-checkbox-text" slot="">I have read and accept <a class="term-link" href="#">the terms of the license agreement.
                                <span class="asterisk-required reg-checkbox-text">*</span></a></span>
                        </el-form-item>
                        <el-form-item label="" prop="type" class="citizen-wrap">
                            <el-checkbox v-model="form.not_citizen" label="" name="type"></el-checkbox>
                            <span class="reg-checkbox-text" slot="">I am not a citizen of countries which are indicated in the item 2.4 of the terms of the license agreement
                                <span class="asterisk-required reg-checkbox-text">*</span></span>
                        </el-form-item>
                    </el-form>
                    <el-row>
                        <el-button class="reg-form-btn" type="primary">Sign up</el-button>
                    </el-row>
                    <el-row>
                        <p class="reg-link-wrap"><span class="text-secondary">Already have an account?</span>
                            <nuxt-link
                                to="login">
                                <span class="reg-link">
                                    Log in
                                </span>
                            </nuxt-link>
                        </p>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "registration",
        data() {
            return {
                labelPosition: 'right',
                form: {
                    email: '',
                    user_name: '',
                    password: '',
                    password_confirmation: '',
                    referral_code:'',
                    accept:'',
                    not_citizen:''
                }
            };
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/element-ui-colors";
    @import "assets/scss/variables";

    .reg-wrap {
        height: 900px;
        display: flex;
        align-items: center;
    }
    .term-link {
        color: $--color-blue;
        text-decoration: none;
        &:hover {
            text-decoration:underline;
        }
    }
    .asterisk-required {
        color: red;
    }
    .citizen-wrap {
        > div {
            line-height: 20px;
        }
    }
    .reg-checkbox-text {
        color: $--color-text-secondary;
    }
    .sign_up_title {
        text-align: center;
        color: $--color-secondary;
        margin-bottom: 10px;
    }
    .sign_up_info {
        text-align: center;
        margin-bottom: 20px;
        color: $--color-text-secondary;
    }
    .reg-form-btn {
        width: 100%;
    }
    .reg-link-wrap {
        text-align: center;
    }
</style>
