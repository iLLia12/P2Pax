<template>
    <el-row class="content-wrap trade-simple-wrap">
        <DesktopForm />

        <MobileFormB />
    </el-row>
</template>

<script>

    import MobileFormB from "../../../components/Trade/Simple/MobileFormB";
    import DesktopForm from "../../../components/Trade/Simple/DesktopForm";

    export default {
        name: "simplev2",
        components:{
            MobileFormB,
            DesktopForm,
        },
        data: () => ({
            form:{
                name:''
            }
        })
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

    .trade-simple-wrap {
        margin-top: 40px;

    }
</style>
