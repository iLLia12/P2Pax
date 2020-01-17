<template>
    <el-header class="header">
        <div class="navWrapper">
            <div id="menu" :class="{ active: isActive }">
                <el-menu mode="horizontal" @select="handleSelect" :router="true">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container nav-container">
                            <el-menu-item @click="isActive = !isActive">
                                <n-link to="/" no-prefetch>
                                    <Logo />
                                </n-link>
                            </el-menu-item>
                            <el-menu-item class="nav-link" @click="isActive = !isActive">
                                <n-link class="nav-link" to="#" no-prefetch>{{ $t('top_nav.buy') }}</n-link>
                            </el-menu-item>
                            <el-menu-item class="nav-link" @click="isActive = !isActive">
                                <n-link class="nav-link" to="#" no-prefetch>{{ $t('top_nav.sell') }}</n-link>
                            </el-menu-item>
                            <el-menu-item @click="isActive = !isActive">
                                <n-link class="nav-link" to="/trade/create" no-prefetch>{{ $t('top_nav.post_trade') }}</n-link>
                            </el-menu-item>
                            <el-menu-item class="nav-link nav-link-login">
                                <n-link to="/auth/login" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow login-btn" type="primary">{{ $t('top_nav.login') }}</el-button>
                                </n-link>
                                <n-link to="/auth/registration" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow" type="success">{{ $t('top_nav.registration') }}</el-button>
                                </n-link>
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
                                <n-link to="/auth/login" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow login-btn" type="primary">{{ $t('top_nav.login') }}</el-button>
                                </n-link>
                                <n-link to="/auth/registration" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow" type="success">{{ $t('top_nav.registration') }}</el-button>
                                </n-link>
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
</template>

<script>

    import FooterComponent from "../Footer/index";

    const icons = {
        'en':'icon_uk',
        'ru':'icon_ru',
        'zh':'icon_zh',
        'es':'icon_es',
    };

    import Logo from '../Logo'

    export default {
        name: "index",
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

    .icon_lang {
        width: 25px;
        height: 25px;
        cursor: pointer;
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
        text-decoration: none;
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
    .lang-dropdown {
        margin-right: 20px;
        margin-top: 20px;
    }
    .nav-link-lang {
        display: none;
    }
    .login-btn {
        margin-right: 10px;
    }
</style>
