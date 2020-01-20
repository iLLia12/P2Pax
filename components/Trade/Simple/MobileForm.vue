<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container trade-simple-mobile">
        <el-row  type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card" :body-style="{ borderRadius:'0', paddingTop:'0'}">
                    <el-collapse v-model="activeStep" @change="handleChange" accordion>
                        <el-collapse-item title="Step 1" :name="1">
                            <p class="title-inner">Exchange rate to buy</p>
                            <el-row>
                                <el-col class="currency-scroll-wrap" :xs="{span:8, offset:8}" :sm="{span:8, offset:8}" :md="{span:8, offset:8}" :lg="6" :xl="6">
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('DFC')"
                                                   :type="form.currency_buy === 'DFC' ? 'primary' : ''"
                                                   size="mini">DFC</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('DAQ')"
                                                   :type="form.currency_buy === 'DAQ' ? 'primary' : ''"
                                                   size="mini">DAQ</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('FDS')"
                                                   :type="form.currency_buy === 'FDS' ? 'primary' : ''"
                                                   size="mini">FDS</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('MVN')"
                                                   :type="form.currency_buy === 'MVN' ? 'primary' : ''"
                                                   size="mini">MVN</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('SLD')"
                                                   :type="form.currency_buy === 'SLD' ? 'primary' : ''"
                                                   size="mini">SLD</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('TRE')"
                                                   :type="form.currency_buy === 'TRE' ? 'primary' : ''"
                                                   size="mini">TRE</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('VCX')"
                                                   :type="form.currency_buy === 'VCX' ? 'primary' : ''"
                                                   size="mini">DFC</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('BBV')"
                                                   :type="form.currency_buy === 'BBV' ? 'primary' : ''"
                                                   size="mini">DAQ</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('ZDS')"
                                                   :type="form.currency_buy === 'ZDS' ? 'primary' : ''"
                                                   size="mini">FDS</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('LLK')"
                                                   :type="form.currency_buy === 'LLK' ? 'primary' : ''"
                                                   size="mini">MVN</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('POI')"
                                                   :type="form.currency_buy === 'POI' ? 'primary' : ''"
                                                   size="mini">SLD</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencyBuy('RTE')"
                                                   :type="form.currency_buy === 'RTE' ? 'primary' : ''"
                                                   size="mini">TRE</el-button></div>
                                </el-col>
                            </el-row>
                            <div></div>
                            <p class="title-inner">Exchange rate to sell</p>
                            <el-row>
                                <el-col class="currency-scroll-wrap" :xs="{span:8, offset:8}" :sm="{span:8, offset:8}" :md="{span:8, offset:8}" :lg="6" :xl="6">
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('DFC')"
                                                   :type="form.currency_sell === 'DFC' ? 'primary' : ''"
                                                   size="mini">DFC</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('DAQ')"
                                                   :type="form.currency_sell === 'DAQ' ? 'primary' : ''"
                                                   size="mini">DAQ</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('FDS')"
                                                   :type="form.currency_sell === 'FDS' ? 'primary' : ''"
                                                   size="mini">FDS</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('MVN')"
                                                   :type="form.currency_sell === 'MVN' ? 'primary' : ''"
                                                   size="mini">MVN</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('SLD')"
                                                   :type="form.currency_sell === 'SLD' ? 'primary' : ''"
                                                   size="mini">SLD</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('TRE')"
                                                   :type="form.currency_sell === 'TRE' ? 'primary' : ''"
                                                   size="mini">TRE</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('VCX')"
                                                   :type="form.currency_sell === 'VCX' ? 'primary' : ''"
                                                   size="mini">DFC</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('BBV')"
                                                   :type="form.currency_sell === 'BBV' ? 'primary' : ''"
                                                   size="mini">DAQ</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('ZDS')"
                                                   :type="form.currency_sell === 'ZDS' ? 'primary' : ''"
                                                   size="mini">FDS</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('LLK')"
                                                   :type="form.currency_sell === 'LLK' ? 'primary' : ''"
                                                   size="mini">MVN</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('POI')"
                                                   :type="form.currency_sell === 'POI' ? 'primary' : ''"
                                                   size="mini">SLD</el-button></div>
                                    <div class="currency-tag-wrap">
                                        <el-button @click="selectCurrencySell('RTE')"
                                                   :type="form.currency_sell === 'RTE' ? 'primary' : ''"
                                                   size="mini">TRE</el-button></div>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" class="btn-wrap">
                                <el-button @click="changeStep(2)" type="success">NEXT</el-button>
                            </el-row>
                        </el-collapse-item>
                        <el-collapse-item title="Step 2" :name="2">
                            <p class="title-inner">Exchange rate to sell</p>
                            <el-row>
                                <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                    <el-form :inline="true" :model="form" class="demo-form-inline">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.manual_checkbox"></el-checkbox>
                                            <span>Set manually</span>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <el-input v-model="form.manual_value"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row>
                                <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                    <el-form :inline="true" :model="form" class="demo-form-inline" label-position="right">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.market_checkbox"></el-checkbox>
                                            <span>Count the amount depending on the market rate + </span>
                                        </el-form-item>
                                        <el-form-item label="" class="profit-input">
                                            <el-input v-model="form.market_value"></el-input>
                                            <div class="input-label-right"> % profit</div>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>

                            <el-row type="flex" justify="center" class="btn-wrap">
                                <el-button @click="changeStep(1)">BACK</el-button>
                                <el-button @click="changeStep(3)" type="success">NEXT</el-button>
                            </el-row>
                        </el-collapse-item>
                        <el-collapse-item title="Step 3" :name="3">
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                                <p class="title-inner">Where do you want to get UAH</p>
                                <el-row style="margin-top: 30px">
                                    <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.bank_card"></el-checkbox>
                                            <span>Bank card</span>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.cash"></el-checkbox>
                                            <span>Сash upon meeting</span>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.other"></el-checkbox>
                                            <span>Other</span>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                            <el-row type="flex" justify="center" class="btn-wrap">
                                <el-button @click="changeStep(2)">BACK</el-button>
                                <el-button @click="changeStep(4)" type="success">NEXT</el-button>
                            </el-row>
                        </el-collapse-item>
                        <el-collapse-item title="Step 4" :name="4">
                            <p class="sub-title">Filter buyers</p>
                            <p class="title-inner">Show only offers with</p>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                                <el-row style="margin-top: 30px">
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <el-form-item label="Minimum transaction amount greater than:" class="form-item-wrap">
                                            <el-input
                                                size="mini"
                                                placeholder=""
                                                v-model="form.input4">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <el-form-item label="Maximum amount of single transaction:" class="form-item-wrap">
                                            <el-input
                                                size="mini"
                                                placeholder=""
                                                v-model="form.input5">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.input7"></el-checkbox>
                                            <span>Verified users only</span>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.input8"></el-checkbox>
                                            <span>Authenticated users only</span>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <el-form-item label="">
                                            <el-checkbox v-model="form.input9"></el-checkbox>
                                            <span>Check user before the deal</span>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>

                            <el-row type="flex" justify="center" class="btn-wrap">
                                <el-button @click="changeStep(3)">BACK</el-button>
                                <el-button type="success">SAVE</el-button>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-col>
        </el-row>
    </el-col>
</template>

<script>
    export default {
        name: "MobileForm",
        data:() => ({
            activeStep:1,
            activeNames:[1,2],
            step:2,
            form:{
                currency_sell:'',
                currency_buy:'',
                manual_checkbox:'',
                manual_value:'',
                market_checkbox:'',
                market_value:'',
                bank_card:'',
                cash:'',
                other:'',
            }
        }),
        computed:{
            isNextButtonDisabled() {
                return !(this.form.currency_sell.length && this.form.currency_buy.length)
            }
        },
        methods:{
            handleChange(val) {
                console.log(val)
            },
            handleCurrencyBuyClick(val) {
                console.log(val.target)
            },
            selectCurrencySell(currency) {
                this.$set(this.form, 'currency_sell', currency)
            },
            selectCurrencyBuy(currency) {
                this.$set(this.form, 'currency_buy', currency)
            },
            changeStep(step) {
                this.activeStep = step;
            }
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";
    @import "assets/scss/element-ui-colors";

    .trade-simple-mobile {
        height: 110vh;
        display: none;
        .title {
            margin-bottom: 10px;
            font-size: 30px;
            text-align: center;
            color: $--color-grey-light;
        }
        .sub-title {
            text-align: center;
        }
        .el-alert {
            display: flex;
            justify-content: center;
        }
        .el-alert__title {
            font-size: 22px;
        }
        .el-collapse {
            border: none;
        }
        .el-collapse-item__header {
            font-size: 25px;
            text-align: center;
            color: $--color-grey-light;
        }
        .currency-tab {
            display: table;
            margin: 10px auto;

        }
        .btn-wrap {
            margin-top: 20px;
        }
        .title-inner {
            margin-bottom: 10px;
            font-size: 18px;
            text-align: center;
            color: $--color-blue-light;
        }
        .currency-sell {
            > div[role=tab] {
                > div[role=button] {
                    background: $--color-alert-danger-light;
                    color: $--color-alert-danger-text;
                    font-size: 25px;
                    padding-left: 20px;
                }
            }
        }
        .currency-buy {
            > div[role=tab] {
                > div[role=button] {
                    background: $--color-alert-success-light;
                    color: $--color-alert-success-text;
                    font-size: 25px;
                    padding-left: 20px;
                }
            }
        }
        .currency-tag-wrap {
            display: flex;
            justify-content: center;
            padding-top: 10px;
            > button {
                display: inline-block;
                width: 70px;
            }
        }
        .profit-input {
            .el-form-item__content {
                display: flex;
            }
            .input-label-right {
                width: 100px;
                margin-left: 5px;
            }
        }
        .form-item-wrap {
            .el-form-item__content {
                width: 15%;
            }
            .el-input__inner {
                padding: 0 5px;
            }
        }
        .currency-scroll-wrap {
            height: 210px;
            overflow: auto;
        }
    }
</style>
