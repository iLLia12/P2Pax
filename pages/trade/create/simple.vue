<template>
    <el-row class="content-wrap trade-simple-wrap">

        <DesktopForm />

        <MobileForm />

    </el-row>
</template>

<script>

    import MobileForm from "../../../components/Trade/Simple/MobileForm";
    import DesktopForm from "../../../components/Trade/Simple/DesktopForm";

    export default {
        name: "simple",
        components:{
            MobileForm,
            DesktopForm
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
