<template>
    <div>
        <el-header class="header">
            <div class="navWrapper">
                <div id="menu" :class="{ active: isActive }">
                    <el-menu mode="horizontal" @select="handleSelect" :router="true">
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container nav-container">
                                <el-menu-item>
                                    <Logo />
                                </el-menu-item>
                                <el-menu-item class="nav-link">
                                    {{ $t('top_nav.buy') }}
                                </el-menu-item>
                                <el-menu-item class="nav-link">
                                    {{ $t('top_nav.sell') }}
                                </el-menu-item>
                                <el-menu-item class="nav-link">
                                    {{ $t('top_nav.post_trade') }}
                                </el-menu-item>
                                <el-menu-item class="nav-link nav-link-login">
                                    <el-button class="btn-shadow" type="success">{{ $t('top_nav.login') }}</el-button>
                                    <el-button class="btn-shadow" type="primary">{{ $t('top_nav.registration') }}</el-button>
                                    <div class="nav-link-lang">
                                        <nuxt-link
                                            v-if="$i18n.locale !== 'en'"
                                            :to="switchLocalePath('en')">
                                            <span class="nav-lang-link">
                                                en
                                            </span>
                                        </nuxt-link>
                                        <nuxt-link
                                            v-if="$i18n.locale !== 'ru'"
                                            :to="switchLocalePath('ru')">
                                            <span class="nav-lang-link">
                                                ru
                                            </span>
                                        </nuxt-link>
                                        <nuxt-link
                                            v-if="$i18n.locale !== 'es'"
                                            :to="switchLocalePath('es')">
                                            <span class="nav-lang-link">
                                                es
                                            </span>
                                        </nuxt-link>
                                        <nuxt-link
                                            v-if="$i18n.locale !== 'zh'"
                                            :to="switchLocalePath('zh')">
                                            <span class="nav-lang-link">
                                                zh
                                            </span>
                                        </nuxt-link>
                                    </div>
                                </el-menu-item>
                                <div class="nav-btn-wrap">
                                    <el-dropdown class="lang-dropdown">
                                        <span class="el-dropdown-link">
                                            {{this.$i18n.locale}}
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>
                                                <nuxt-link
                                                    v-if="$i18n.locale !== 'es'"
                                                    :to="switchLocalePath('es')">
                                                    <span class="nav-lang-link">
                                                        es
                                                    </span>
                                                </nuxt-link>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <nuxt-link
                                                    v-if="$i18n.locale !== 'en'"
                                                    :to="switchLocalePath('en')">
                                                    <span class="nav-lang-link">
                                                en
                                            </span>
                                                </nuxt-link>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <nuxt-link
                                                    v-if="$i18n.locale !== 'ru'"
                                                    :to="switchLocalePath('ru')">
                                                    <span class="nav-lang-link">
                                                ru
                                            </span>
                                                </nuxt-link>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <nuxt-link
                                                    v-if="$i18n.locale !== 'zh'"
                                                    :to="switchLocalePath('zh')">
                                                    <span class="nav-lang-link">
                                                zh
                                            </span>
                                                </nuxt-link>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-button class="btn-shadow" type="primary">{{ $t('top_nav.login') }}</el-button>
                                    <el-button class="btn-shadow" type="success">{{ $t('top_nav.registration') }}</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-menu>
                </div>
                <div id="toggle" @click="select()">
                    <div class="span" id="top" :class="{ active: isActive }"></div>
                    <div class="span" id="middle" :class="{ active: isActive }"></div>
                    <div class="span" id="bottom" :class="{ active: isActive }"></div>
                </div>
            </div>
        </el-header>
        <el-main>
            <nuxt />
        </el-main>
        <el-footer class="footer">
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                    <el-row type="flex" justify="space-between">
                        <el-col :span="5">
                            <img class="logo-footer mb-10" src="~/assets/images/logo-2.png" alt="">
                            <div class="footer-text-small mb-10">
                                © p2pax.com {{ $t('hooter.all_right') }}
                            </div>
                            <div class="footer-text-small mb-10">
                                {{ $t('hooter.follow_us') }}:
                            </div>
                            <div class="footer-icons-wrap mb-10">
                                <div class="icon icon_facebook icon-sm"></div>
                                <div class="icon icon_instagram icon-sm"></div>
                                <div class="icon icon_twitter icon-sm"></div>
                                <div class="icon icon_linkedin icon-sm"></div>
                                <div class="icon icon_telegram icon-sm"></div>
                            </div>
                        </el-col>
                        <!--<el-col :span="7">
                            <p class="footer-section-title text-center">{{ $t('hooter.actions') }}</p>
                            <div class="footer-links-wrap">
                                <nuxt-link class="footer-link text-center" to="/buy">{{ $t('hooter.buy') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('hooter.sell') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('hooter.trade_center') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('hooter.quick_transfer') }}</nuxt-link>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <p class="footer-section-title text-center">{{ $t('hooter.about') }}</p>
                            <div class="footer-links-wrap">
                                <nuxt-link class="footer-link  text-center" to="/buy">{{ $t('hooter.terms') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('hooter.about_us') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-center" to="/sell">{{ $t('hooter.partnership') }}</nuxt-link>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <p class="footer-section-title text-right">{{ $t('hooter.support') }}</p>
                            <div class="footer-links-wrap">
                                <nuxt-link class="footer-link  text-right" to="/buy">{{ $t('hooter.support_request') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('hooter.faq') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('hooter.formula') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('hooter.forget_password') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('hooter.forget_double_auth') }}</nuxt-link>
                                <nuxt-link class="footer-link  text-right" to="/sell">{{ $t('hooter.fishing') }}</nuxt-link>
                            </div>
                        </el-col>-->
                    </el-row>
                </el-col>
            </el-row>
        </el-footer>
    </div>
</template>

<script>

    import Logo from '../components/Logo'

    const icons = {
        'en':'icon_uk',
        'ru':'icon_ru',
        'zh':'icon_zh',
        'es':'icon_es',
    };

    export default {
        components: {
            Logo
        },
        data() {
            return {
                isLangShown:false,
                activeIndex: '/hello',
                isActive: false
            }
        },
        computed: {
            langFlagIcon() {
                return 'icon icon_lang ' + icons[this.$i18n.locale];
            },
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            select: function() {
                this.isActive = !this.isActive;
            },
            showPopover(){
                this.isLangShown = !this.isLangShown
            },
            getLangIconClass(lang) {
                return 'icon icon_lang ' + icons[lang];
            }
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .icon_lang {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .nav-link-registration, .nav-link-login {
        display: none;
    }
    .nav-link-login {
        padding-top: 30px!important;
    }
    .inner-container {

    }
    .nav-container {
        display: flex;
    }
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }
    .links {
        padding-top: 15px;
    }
    .nav-lang-link {
        color: #409EFF;
    }
    .nav-links-wrap {
        display: flex;
        padding-top: 25px;
        margin-left: 20px;
        justify-content: space-between;
        list-style-type: none;
        overflow: hidden;
        width: 270px    ;
        > li {
            text-decoration: none;
        }
    }
    .nav-link {
        margin-right: 25px;
        height: 60px;
        width: 120px;
        text-align: center;
        color: #409EFF;
    }
    .img-logo {
        width: 100px;
        padding-top: 20px;
    }
    .nav-btn-wrap {
        padding: 10px 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
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
    .mb-10 {
        margin-bottom: 10px;
    }
    .footer-section-title {
        color: white;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .footer-links-wrap {
        > a{
            display: block;
            text-decoration: none;
            color: white;
            padding: 5px 0;
        }
    }
    .nav-link-lang {
        display: none;
    }
</style>
