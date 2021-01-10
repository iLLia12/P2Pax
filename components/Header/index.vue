<template>
    <el-header class="header">
        <div class="navWrapper">
            <div id="menu" :class="{ active: isActive }">
                <el-menu mode="horizontal" @select="handleSelect" :router="true">
                    <el-row class="outline-none">
                        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container d-flex nav-container">
                            <el-menu-item @click="isActive = !isActive">
                                <n-link to="/" no-prefetch>
                                    <Logo />
                                </n-link>
                            </el-menu-item>
                            <el-menu-item @click="isActive = !isActive">
                                <n-link class="mr25x h60px w120px text-align-center color-primary text-decoration-none" to="#" no-prefetch>{{ $t('top_nav.buy') }}</n-link>
                            </el-menu-item>
                            <el-menu-item @click="isActive = !isActive">
                                <n-link class="mr25x h60px w120px text-align-center color-primary text-decoration-none" to="#" no-prefetch>{{ $t('top_nav.sell') }}</n-link>
                            </el-menu-item>
                            <el-menu-item @click="isActive = !isActive">
                                <n-link class="mr25x h60px w120px text-align-center color-primary text-decoration-none" to="/trade/create" no-prefetch>{{ $t('top_nav.post_trade') }}</n-link>
                            </el-menu-item>
                            <el-menu-item class="pt30px d-none">
                                <n-link to="/auth/login" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow mr10x" type="primary">{{ $t('top_nav.login') }}</el-button>
                                </n-link>
                                <n-link to="/auth/registration" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow" type="success">{{ $t('top_nav.registration') }}</el-button>
                                </n-link>
                                <div class="d-none nav-link-lang">
                                    <nuxt-link
                                        v-if="$i18n.locale !== 'en'"
                                        :to="switchLocalePath('en')">
                                            <span class="color-primary">
                                                en
                                            </span>
                                    </nuxt-link>
                                    <nuxt-link
                                        v-if="$i18n.locale !== 'ru'"
                                        :to="switchLocalePath('ru')">
                                            <span class="color-primary">
                                                ru
                                            </span>
                                    </nuxt-link>
                                    <nuxt-link
                                        v-if="$i18n.locale !== 'es'"
                                        :to="switchLocalePath('es')">
                                            <span class="color-primary">
                                                es
                                            </span>
                                    </nuxt-link>
                                    <nuxt-link
                                        v-if="$i18n.locale !== 'zh'"
                                        :to="switchLocalePath('zh')">
                                            <span class="color-primary">
                                                zh
                                            </span>
                                    </nuxt-link>
                                </div>
                            </el-menu-item>
                            <div class="nav-btn-wrap w100 d-flex justify-end">
                                <el-dropdown class="mr20x mt20x">
                                        <span class="el-dropdown-link">
                                            {{this.$i18n.locale}}
                                        </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>
                                            <nuxt-link
                                                v-if="$i18n.locale !== 'es'"
                                                :to="switchLocalePath('es')">
                                                    <span class="color-primary">
                                                        es
                                                    </span>
                                            </nuxt-link>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <nuxt-link
                                                v-if="$i18n.locale !== 'en'"
                                                :to="switchLocalePath('en')">
                                                    <span class="color-primary">
                                                        en
                                                    </span>
                                            </nuxt-link>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <nuxt-link
                                                v-if="$i18n.locale !== 'ru'"
                                                :to="switchLocalePath('ru')">
                                                    <span class="color-primary">
                                                        ru
                                                    </span>
                                            </nuxt-link>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <nuxt-link
                                                v-if="$i18n.locale !== 'zh'"
                                                :to="switchLocalePath('zh')">
                                                    <span class="color-primary">
                                                        zh
                                                    </span>
                                            </nuxt-link>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <n-link to="/auth/login" no-prefetch>
                                    <el-button @click="isActive = !isActive" class="btn-shadow mr10x" type="primary">{{ $t('top_nav.login') }}</el-button>
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
    .icon_lang {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    .nav-btn-wrap {
        padding: 10px 0;
    }
</style>
