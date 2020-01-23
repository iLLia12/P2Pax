<template>
    <transition name="el-fade-in-linear">
        <div class="layout-wrap" v-show="loaded">
            <Header />
            <el-main>
                <nuxt />
            </el-main>
            <FooterComponent />
        </div>
    </transition>
</template>

<script>

    import Logo from '../components/Logo'
    import FooterComponent from '../components/Footer'
    import Header from '../components/Header'

    export default {
        components: {
            Logo,
            FooterComponent,
            Header
        },
        data:()=>({
            loaded:false
        }),
        mounted() {
            this.loaded = true;
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

</style>
