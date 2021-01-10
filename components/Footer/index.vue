<template>
    <el-footer class="footer mt100 bg-primary">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="5">
                        <img class="logo-footer mb-10 mt5px h40px" src="~/assets/images/logo-2.png" alt="">
                        <div class="mb-10 fs12px color-white">
                            © p2pax.com {{ $t('footer.all_right') }}
                        </div>
                        <div class="mb-10 fs12px color-white">
                            {{ $t('footer.follow_us') }}:
                        </div>
                        <div class="mb-10 w120px d-flex justify-between">
                            <div class="icon icon_facebook icon-sm"></div>
                            <div class="icon icon_instagram icon-sm"></div>
                            <div class="icon icon_twitter icon-sm"></div>
                            <div class="icon icon_linkedin icon-sm"></div>
                            <div class="icon icon_telegram icon-sm"></div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <el-row type="flex" justify="end">
                            <nuxt-link class="footer-link text-right color-white" to="/faq">{{ $t('footer.faq') }}</nuxt-link>
                        </el-row>
                        <el-row type="flex" justify="end">
                            <nuxt-link class="footer-link text-right color-white" to="/support">{{ $t('footer.support') }}</nuxt-link>
                        </el-row>
                        <el-row type="flex" justify="end">
                            <nuxt-link class="footer-link text-right color-white" to="/profile">Profile</nuxt-link>
                        </el-row>
                        <el-row type="flex" justify="end">
                            <nuxt-link class="footer-link text-right color-white" to="/trade/create/simple">Trade</nuxt-link>
                        </el-row>
                    </el-col>
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
    .footer {
        height: auto !important;
        padding: 40px 0 20px 0!important;
    }
</style>
