<template>
    <div class="layout-wrap">
        <Header />
        <el-main>
            <nuxt />
        </el-main>
        <FooterComponent />
    </div>
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
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

</style>
