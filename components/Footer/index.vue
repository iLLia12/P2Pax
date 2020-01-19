<template>
    <el-footer class="footer">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="5">
                        <img class="logo-footer mb-10" src="~/assets/images/logo-2.png" alt="">
                        <div class="footer-text-small mb-10">
                            © p2pax.com {{ $t('footer.all_right') }}
                        </div>
                        <div class="footer-text-small mb-10">
                            {{ $t('footer.follow_us') }}:
                        </div>
                        <div class="footer-icons-wrap mb-10">
                            <div class="icon icon_facebook icon-sm"></div>
                            <div class="icon icon_instagram icon-sm"></div>
                            <div class="icon icon_twitter icon-sm"></div>
                            <div class="icon icon_linkedin icon-sm"></div>
                            <div class="icon icon_telegram icon-sm"></div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <el-row>
                            <nuxt-link class="footer-link  text-right color-white" to="/faq">{{ $t('footer.faq') }}</nuxt-link>
                        </el-row>
                        <el-row>
                            <nuxt-link class="footer-link  text-right color-white" to="/support">{{ $t('footer.support') }}</nuxt-link>
                        </el-row>
                        <el-row>
                            <nuxt-link class="footer-link  text-right color-white" to="/profile">Profile</nuxt-link>
                        </el-row>
                        <el-row>
                            <nuxt-link class="footer-link  text-right color-white" to="/trade/create/simple">Trade</nuxt-link>
                        </el-row>
                    </el-col>
                    <!--<el-col :span="7">
                        <p class="footer-section-title text-center">{{ $t('footer.actions') }}</p>
                        <div class="footer-links-wrap">
                            <nuxt-link class="footer-link text-center" to="/buy">{{ $t('footer.buy') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('footer.sell') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('footer.trade_center') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('footer.quick_transfer') }}</nuxt-link>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <p class="footer-section-title text-center">{{ $t('footer.about') }}</p>
                        <div class="footer-links-wrap">
                            <nuxt-link class="footer-link  text-center" to="/buy">{{ $t('footer.terms') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('footer.about_us') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('footer.partnership') }}</nuxt-link>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <p class="footer-section-title text-right">{{ $t('footer.support') }}</p>
                        <div class="footer-links-wrap">
                            <nuxt-link class="footer-link  text-right" to="/buy">{{ $t('footer.support_request') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('footer.faq') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('footer.formula') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('footer.forget_password') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('footer.forget_double_auth') }}</nuxt-link>
                            <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('footer.fishing') }}</nuxt-link>
                        </div>
                    </el-col>-->
                </el-row>
            </el-col>
        </el-row>
    </el-footer>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

    .footer {
        height: auto !important;
        margin-top: 100px;
        background: $--bg-primary;
        padding: 40px 0 20px 0!important;
    }
    .logo-footer {
        margin-top: 5px;
        height: 40px;
    }
    .footer-text-small {
        font-size: 12px;
        color: white;
    }
    .lang-dropdown {
        margin-right: 20px;
        margin-top: 20px;
    }
    .footer-icons-wrap {
        width: 120px;
        display: flex;
        justify-content: space-between;
    }
    .footer-section-title {
        color: white;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .footer-links-wrap {
        > a {
            display: block;
            text-decoration: none;
            color: white;
            padding: 5px 0;
        }
    }
</style>
