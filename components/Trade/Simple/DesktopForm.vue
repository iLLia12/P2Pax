<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container trade-simple-desktop">
        <el-row>
            <el-col>
                <el-steps :active="1">
                    <el-step title="Step 1" description="Some description"></el-step>
                    <el-step title="Step 2" description="Some description"></el-step>
                    <el-step title="Step 3" description="Some description"></el-step>
                </el-steps>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-form label-position="top" :model="form">
                    <el-row type="flex" justify="center">
                        <el-col :span="5">
                            <el-form-item label="Name">
                                <el-input v-model="form.currency_to_buy"></el-input>
                            </el-form-item>
                            <el-form-item label="Activity zone">
                                <el-input v-model="form.currency_to_sell"></el-input>
                            </el-form-item>
                            {{tradeSimpleForm.currency_to_buy}}
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
        </el-row>
    </el-col>
</template>

<script>

    export default {
        name: "DesktopForm",
        data:() => ({
            form:{
                currency_to_buy:'DSA',
                currency_to_sell:'DMV'
            }
        }),
        watch:{
            form:{
                handler(a, b) {
                    this.setTradeSimpleForm({
                        ...a
                    })
                },
                deep:true
            }
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";
    @import "assets/scss/element-ui-colors";

    .trade-simple-desktop {
        height: 70vh;
    }
</style>
