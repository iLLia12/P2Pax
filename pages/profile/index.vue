<template>
    <el-row class="content-wrap profile-index-wrap">
        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="side-menu-wrap">
                    <SideMenu />
                </el-col>
                <el-col :xs="24" :sm="24" :md="{span:19, offset:1}" :lg="{span:19, offset:1}" :xl="{span:19, offset:1}">
                    <el-row>
                        <el-col>
                            <h1 class="profile-title">General information</h1>
                            <el-form label-position="top" :model="form" class="quick-buy-table">
                                <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
                                            <el-row>
                                                <el-col :xs="10" :sm="4" :md="24" :lg="24" :xl="24">
                                                    <div class="avatar-wrap">
                                                        <img class="table-avatar" src="~/assets/images/unknown_user.png" alt="">
                                                    </div>
                                                </el-col>
                                                <el-col :xs="12" :sm="6" :md="24" :lg="24" :xl="24" class="user-info-wrap">
                                                    <div class="user-name">
                                                        webdev
                                                    </div>
                                                    <div class="user-email">
                                                        webdev9368@gmail.com
                                                    </div>
                                                    <div class="user-email-change">
                                                        Change e-mail
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
                                            <el-row class="form-inner-wrap">
                                                <el-col :xs="24" :sm="24" :md="24" :lg="{span:5, offset:1}" :xl="{span:5, offset:1}">
                                                    <el-form-item label="Country">
                                                        <el-select v-model="form.country" placeholder="" class="search-input">
                                                            <el-option label="Ukraine" value="shanghai"></el-option>
                                                            <el-option label="Australia" value="beijing"></el-option>
                                                            <el-option label="Belgium" value="beijing"></el-option>
                                                        </el-select>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :xs="24" :sm="24" :md="24" :lg="{span:5, offset:1}" :xl="{span:5, offset:1}">
                                                    <el-form-item label="Phone number">
                                                        <el-input v-model="form.phone"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :xs="24" :sm="24" :md="24" :lg="{span:5, offset:1}" :xl="{span:5, offset:1}">
                                                    <el-form-item label="Time">
                                                        <el-select v-model="form.time" placeholder="" class="search-input">
                                                            <el-option label="Ukraine" value="shanghai"></el-option>
                                                            <el-option label="Australia" value="beijing"></el-option>
                                                            <el-option label="Belgium" value="beijing"></el-option>
                                                        </el-select>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :xs="24" :sm="24" :md="24" :lg="{span:5, offset:1}" :xl="{span:5, offset:1}">
                                                    <el-form-item label="Language">
                                                        <el-select v-model="form.language" placeholder="" class="search-input">
                                                            <el-option label="Ukraine" value="shanghai"></el-option>
                                                            <el-option label="Spanish" value="beijing"></el-option>
                                                        </el-select>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </el-card>
                            </el-form>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:11, offset:0}" class="basic-info-wrap">
                            <h1 class="profile-title">Basic information</h1>
                            <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                                <el-row>
                                    <el-col class="swatch-wrap">
                                        <el-switch
                                            style="display: block"
                                            v-model="form.confidential_information"
                                            active-text="Disable confidential information from e-mail notifications">
                                        </el-switch>
                                    </el-col>
                                    <el-col class="swatch-wrap">
                                        <el-switch
                                            style="display: block"
                                            v-model="form.web_notifications"
                                            active-text="Enable Web Notifications">
                                        </el-switch>
                                    </el-col>
                                    <el-col class="swatch-wrap">
                                        <el-switch
                                            style="display: block"
                                            v-model="form.sales_ads"
                                            active-text="Temporarily disable all sales ads">
                                        </el-switch>
                                    </el-col>
                                    <el-col class="swatch-wrap">
                                        <el-switch
                                            style="display: block"
                                            v-model="form.purchases_ads"
                                            active-text="Temporarily disable all ads for purchases">
                                        </el-switch>
                                    </el-col>
                                    <el-col class="swatch-wrap">
                                        <el-switch
                                            style="display: block"
                                            v-model="form.sms_notifications"
                                            active-text="Receive SMS notifications about new online payments for your ads (free).">
                                        </el-switch>
                                    </el-col>
                                    <el-col class="swatch-wrap">
                                        <el-switch
                                            style="display: block"
                                            v-model="form.sms_messages"
                                            active-text="Send me SMS about new messages from buyers/sellers">
                                        </el-switch>
                                    </el-col>
                                    <h3 class="mb-10">About me</h3>
                                    <el-row class="mb-10">
                                        <el-input
                                            type="textarea"
                                            autosize
                                            placeholder="Please input"
                                            v-model="form.about">
                                        </el-input>
                                    </el-row>
                                    <el-row type="flex" justify="end">
                                        <el-button type="primary" plain>Save changes</el-button>
                                    </el-row>
                                </el-row>
                            </el-card>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:12, offset:1}">
                            <el-row>
                                <el-col>
                                    <h1 class="profile-title">Account security</h1>
                                    <el-card class="box-card account-security" :body-style="{ borderRadius:'0'}">
                                        <el-row class="account-security-row">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" class="col">
                                                <div class="light-label">Real name</div>
                                                <div class="mt-5">
                                                    <nuxt-link
                                                        class="link"
                                                        to="registration">
                                                        <span class="account-security-link">
                                                            Change real name
                                                        </span>
                                                    </nuxt-link>
                                                </div>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8"  class="col">
                                                <div class="light-label">Login Guard</div>
                                                <div class="mt-5">
                                                    <el-switch
                                                        style="display: block"
                                                        v-model="form.login_guard">
                                                    </el-switch>
                                                </div>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8"  class="col">
                                                <div class="light-label">Identity verified</div>
                                                <div class="mt-5">
                                                    <nuxt-link
                                                        class="link"
                                                        to="registration">
                                                        <span class="account-security-link">
                                                            Verify your account
                                                        </span>
                                                    </nuxt-link>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="col">
                                                <div class="light-label">2f authorization</div>
                                                <div class="mt-5">
                                                    <el-switch
                                                        style="display: block"
                                                        v-model="form.two_f_authorization">
                                                    </el-switch>
                                                </div>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="col">
                                                <div class="light-label">Password</div>
                                                <div class="mt-5">
                                                    <el-input placeholder="password"  size="mini" v-model="form.password" show-password></el-input>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-card>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col class="login-history-wrap">
                                    <h1 class="profile-title">Login history</h1>
                                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                                        <el-row class="login-history-row">
                                            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                                                <div class="login-history-location">Ukraine (176.36.80.219)</div>
                                                <div class="login-history-client">Chrome 76.0.3809.87, Linux</div>
                                            </el-col>
                                            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                                <div class="light-label">2020-01-18 17:41:43</div>
                                            </el-col>
                                        </el-row>
                                        <el-divider></el-divider>
                                        <el-row class="login-history-row">
                                            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                                                <div class="login-history-location">Ukraine (176.36.80.219)</div>
                                                <div class="login-history-client">Chrome 76.0.3809.87, Linux</div>
                                            </el-col>
                                            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                                <div class="light-label">2020-01-18 17:41:43</div>
                                            </el-col>
                                        </el-row>
                                        <el-divider></el-divider>
                                        <el-row type="flex" justify="end" class="login-history-btn-wrap">
                                            <el-button type="primary" plain>Complete login history</el-button>
                                        </el-row>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import SideMenu from "../../components/Profile/SideMenu";
    export default {
        name: "index",
        components:{
            SideMenu
        },
        data:() => ({
            form:{
                time:'(UTC+02:00) Kiev',
                currency:'',
                language:'en',
                country:'Ukraine',
                confidential_information:'',
                web_notifications:'',
                sales_ads:'',
                purchases_ads:'',
                phone:'+380956335771',
                sms_notifications:false,
                sms_messages:false,
                about:'',
                login_guard:'',
                two_f_authorization:false,
                password:''
            }
        })
    }
</script>

<style lang="scss">
    .profile-index-wrap {
        margin-top: 40px;
        .profile-title {
            margin-bottom: 30px;
            color: $--color-grey-light;
        }
        .table-avatar {
            width: 100px;
        }
        .user-name {
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 4px;
            text-align: center;
        }
        .user-email {
            font-size: 14px;
            margin-bottom: 4px;
            color: $--color-green;
            text-align: center;
        }
        .user-email-change {
            font-size: 12px;
            font-weight: inherit;
            color: $--color-blue;
            cursor: pointer;
            text-decoration: underline;
            text-align: center;
        }
        .avatar-wrap {
            display: flex;
            justify-content: center;
        }
        .el-form-item__label {
            padding-bottom: 0;
        }
        .form-inner-wrap {
            margin-top:  20px;
        }
        .swatch-wrap {
            margin-bottom: 30px;
        }
        .el-switch {
            display: flex !important;
        }
        .el-switch__label {
            > span {
                font-size: 12px;
            }
        }
        .account-security-link {
            font-size: 12px;
        }
        .login-history-location {
            font-size: 13px;
            font-weight: 700;
        }
        .login-history-client {
            font-size: 13px;
        }
        .light-label, .el-form-item__label {
            color: $--color-text-secondary;
            font-size: 13px;
        }
        .el-link--inner {
            font-size: 13px;
        }
        .el-divider--horizontal {
            margin: 0;
        }
        .login-history-wrap {
            .login-history-row {
                padding-top: 10px;
                margin-bottom: 10px;
            }
            .login-history-btn-wrap {
                margin-top: 20px;
            }
        }
    }
</style>
