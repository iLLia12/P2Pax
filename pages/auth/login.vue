<template>
    <div class="content-wrap">
        <el-row class="login-wrap">
            <el-col :xs="24" :sm="24" :md="{offset:7, span:10}" :lg="{offset:9, span:6}" :xl="{offset:9, span:6}" class="inner-container">
                <el-card class="login-form-wrap">
                    <h2 class="login_title">Login</h2>
                    <el-form :label-position="labelPosition" :model="form">
                        <el-form-item label="">
                            <el-input placeholder="Email" v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input placeholder="User name" v-model="form.region"></el-input>
                        </el-form-item>
                        <el-form-item label="" label-position="left" class="terms-wrap" prop="type">
                            <el-checkbox v-model="form.accept" label="" name="type"></el-checkbox>
                            <span class="login-checkbox-text" slot="">Remember me</span>
                        </el-form-item>
                    </el-form>
                    <el-row>
                        <el-button class="login-form-btn" type="primary">Login</el-button>
                    </el-row>
                    <el-row>
                        <p class="login-link-wrap"><span class="text-secondary">Are you not registered yet?</span>
                            <nuxt-link
                                class="link"
                                to="registration">
                                <span class="block text-center">
                                    Registration
                                </span>
                            </nuxt-link>
                        </p>
                    </el-row>
                    <el-row>
                            <nuxt-link
                                class="link"
                                to="#">
                                <span class="block text-center">
                                    Forgot your password?
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
        name: "login",
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
    .login-wrap {
        height: 480px;
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
    .citizen-wrap, .terms-wrap {
        > .el-form-item__content {
            line-height: 20px;
        }
    }
    .login-checkbox-text {
        color: $--color-text-secondary;
    }
    .login_title {
        text-align: center;
        color: $--color-secondary;
        margin-bottom: 10px;
    }
    .login-form-btn {
        width: 100%;
    }
    .login-link-wrap {
        text-align: center;
    }
</style>
