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
                                    Buy
                                </el-menu-item>
                                <el-menu-item class="nav-link">
                                    Sell
                                </el-menu-item>
                                <el-menu-item class="nav-link">
                                    Post Trade
                                </el-menu-item>
                                <div class="nav-btn-wrap">
                                    <el-button class="btn-shadow" type="primary">Registration</el-button>
                                    <el-button class="btn-shadow" type="success">Login</el-button>
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
                    <el-row>
                        <el-col :span="12">
                            <img class="logo-footer" src="~/assets/images/logo-2.png" alt="">
                            <div class="footer-text-small">
                                © p2pax.com All rights reserved
                            </div>
                            <div class="footer-text-small">
                                Follow us
                            </div>
                        </el-col>
                        <el-col :span="12">

                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-footer>
    </div>
</template>

<script>

    import Logo from '../components/Logo'

    export default {
        components: {
            Logo
        },

        data() {
            return {
                activeIndex: '/hello',
                isActive: false
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            select: function() {
                this.isActive = !this.isActive;
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
    .footer {

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
        padding: 10px!important;;
    }
    .logo-footer {
        margin-top: 5px;
        height: 40px;
    }
    .footer-text-small {
        font-size: 12px;
        color: white;
    }

</style>
