<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container trade-simple-mobile">
        <el-form ref="form" :model="form">
            <el-row  type="flex" justify="center">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="step === 1">
                    <h5 class="title">{{$t('pages.simple_trade.step_one')}}</h5>

                    <el-card class="box-card" :body-style="{ borderRadius:'0', paddingTop:'5px', paddingBottom:'5px'}">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item :title="$t('pages.simple_trade.currency_to_sell')" :name="1" class="currency-sell"><!--:xs="12" :sm="12" :md="12" :lg="6" :xl="6"-->
                                <el-row>
                                    <el-col v-if="!(!!form.currency_sell.length)" class="currency-scroll-wrap" :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="6" :xl="6">
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencySell('BTC')"
                                                       :type="form.currency_sell === 'BTC' ? 'primary' : ''"
                                                       size="mini">BTC</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencySell('ETH')"
                                                       :type="form.currency_sell === 'ETH' ? 'primary' : ''"
                                                       size="mini">ETH</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencySell('AC')"
                                                       :type="form.currency_sell === 'AC' ? 'primary' : ''"
                                                       size="mini">AC</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencySell('USD')"
                                                       :type="form.currency_sell === 'USD' ? 'primary' : ''"
                                                       size="mini">USD</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencySell('RUB')"
                                                       :type="form.currency_sell === 'RUB' ? 'primary' : ''"
                                                       size="mini">RUB</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencySell('UAH')"
                                                       :type="form.currency_sell === 'UAH' ? 'primary' : ''"
                                                       size="mini">UAH</el-button></div>
                                    </el-col>
                                    <el-col style="padding-top: 10px;" v-if="!!form.currency_sell.length" class="currency-scroll-wrap" :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
                                        <el-tag
                                            closable
                                            :disable-transitions="false"
                                            @close="handleClearCurrencySellTag()">
                                            {{form.currency_sell}}
                                        </el-tag>
                                    </el-col>
                                    <el-col v-if="!!form.currency_sell.length" class="currency-scroll-wrap" :xs="{span:11, offset:1}" :sm="{span:11, offset:1}" :md="{span:11, offset:1}" :lg="{span:6, offset:1}" :xl="{span:6, offset:1}" style="padding-top: 10px">
                                        <el-form-item label="">
                                            <el-input :placeholder="$t('pages.simple_trade.amount')" v-model="form.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <el-input :placeholder="$t('pages.simple_trade.price')" v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-collapse-item>
                            <el-collapse-item :title="$t('pages.simple_trade.currency_to_buy')" :name="2" class="currency-buy">
                                <el-row>
                                    <el-col v-if="!(!!form.currency_buy.length)" class="currency-scroll-wrap" :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="6" :xl="6">
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencyBuy('BTC')"
                                                       :type="form.currency_buy === 'BTC' ? 'primary' : ''"
                                                       size="mini">BTC</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencyBuy('ETH')"
                                                       :type="form.currency_buy === 'ETH' ? 'primary' : ''"
                                                       size="mini">ETH</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencyBuy('AC')"
                                                       :type="form.currency_buy === 'AC' ? 'primary' : ''"
                                                       size="mini">AC</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencyBuy('USD')"
                                                       :type="form.currency_buy === 'USD' ? 'primary' : ''"
                                                       size="mini">USD</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencyBuy('RUB')"
                                                       :type="form.currency_buy === 'RUB' ? 'primary' : ''"
                                                       size="mini">RUB</el-button></div>
                                        <div class="currency-tag-wrap">
                                            <el-button @click="selectCurrencyBuy('UAH')"
                                                       :type="form.currency_buy === 'UAH' ? 'primary' : ''"
                                                       size="mini">UAH</el-button></div>
                                    </el-col>
                                    <el-col style="padding-top: 10px;" v-if="!!form.currency_buy.length" class="currency-scroll-wrap" :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
                                        <el-tag
                                            closable
                                            :disable-transitions="false"
                                            @close="handleClearCurrencySellTag()">
                                            {{form.currency_buy}}
                                        </el-tag>
                                    </el-col>
                                    <el-col v-if="!!form.currency_buy.length" class="currency-scroll-wrap" :xs="{span:11, offset:1}" :sm="{span:11, offset:1}" :md="{span:11, offset:1}" :lg="{span:6, offset:1}" :xl="{span:6, offset:1}" style="padding-top: 10px">
                                        <el-form-item label="">
                                            <el-input :placeholder="$t('pages.simple_trade.amount')" v-model="form.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <el-input :placeholder="$t('pages.simple_trade.price')" v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-collapse-item>
                        </el-collapse>
                        <el-row type="flex" justify="center" class="btn-wrap">
                            <el-button @click="changeStep(2)" type="success">{{$t('pages.simple_trade.next')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>


                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="step === 2">
                    <h5 class="title">{{$t('pages.simple_trade.step_two')}}</h5>

                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <p class="title-inner">{{$t('pages.simple_trade.exchange_rate_to_sell')}}</p>
                        <el-row>
                            <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                <el-form :inline="true" :model="form" class="demo-form-inline">
                                    <el-form-item label="">
                                        <el-checkbox v-model="form.manual_checkbox"></el-checkbox>
                                        <span>{{$t('pages.simple_trade.set_manually')}}</span>
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
                                        <span>{{$t('pages.simple_trade.count_amount')}} + </span>
                                    </el-form-item>
                                    <el-form-item label="" class="profit-input">
                                        <el-input v-model="form.market_value"></el-input>
                                        <div class="input-label-right"> % {{$t('pages.simple_trade.profit')}}</div>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>

                        <el-row type="flex" justify="center" class="btn-wrap">
                            <el-button @click="changeStep(1)">{{$t('pages.simple_trade.back')}}</el-button>
                            <el-button @click="changeStep(3)" type="success">{{$t('pages.simple_trade.next')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>


                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="step === 3">
                    <h5 class="title">{{$t('pages.simple_trade.step_three')}}</h5>

                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <el-form :inline="true" :model="form" class="demo-form-inline">
                            <p class="title-inner">{{$t('pages.simple_trade.where_to_get')}}</p>
                            <el-row style="margin-top: 30px">
                                <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                    <el-form-item label="">
                                        <el-checkbox v-model="form.bank_card"></el-checkbox>
                                        <span>{{$t('pages.simple_trade.bank_card')}}</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                    <el-form-item label="">
                                        <el-checkbox v-model="form.cash"></el-checkbox>
                                        <span>{{$t('pages.simple_trade.cash_upon_meeting')}}</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :xs="24" :sm="{span:18, offset:4}" :md="{span:18, offset:4}" :lg="{span:18, offset:4}" :xl="{span:18, offset:4}">
                                    <el-form-item label="">
                                        <el-checkbox v-model="form.other"></el-checkbox>
                                        <span>{{$t('pages.simple_trade.other')}}</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <el-row type="flex" justify="center" class="btn-wrap">
                            <el-button @click="changeStep(2)">{{$t('pages.simple_trade.back')}}</el-button>
                            <el-button @click="changeStep(4)" type="success">{{$t('pages.simple_trade.next')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>


                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="step === 4">
                    <h5 class="title">{{$t('pages.simple_trade.step_four')}}</h5>

                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <p class="sub-title">{{$t('pages.simple_trade.filter_buyers')}}</p>
                        <p class="title-inner">{{$t('pages.simple_trade.show_only_offers_with')}}</p>
                        <el-form :inline="true" :model="form" class="demo-form-inline">
                            <el-row style="margin-top: 30px">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item :label="$t('pages.simple_trade.minimum_transaction')"  class="form-item-wrap">
                                        <el-input
                                            size="mini"
                                            placeholder=""
                                            v-model="form.input4">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item :label="$t('pages.simple_trade.maximum_transaction')" class="form-item-wrap">
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
                                        <span>{{$t('pages.simple_trade.verified_users_only')}}</span>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="">
                                        <el-checkbox v-model="form.input8"></el-checkbox>
                                        <span>{{$t('pages.simple_trade.authenticated_users_only')}}</span>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <el-form-item label="">
                                        <el-checkbox v-model="form.input9"></el-checkbox>
                                        <span>{{$t('pages.simple_trade.check_user_before_the_deal')}}</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>

                        <el-row type="flex" justify="center" class="btn-wrap">
                            <el-button @click="changeStep(3)">{{$t('pages.simple_trade.back')}}</el-button>
                            <el-button type="success">{{$t('pages.simple_trade.save')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>


            </el-row>
        </el-form>
    </el-col>
</template>

<script>
    export default {
        name: "MobileFormV2",
        data:() => ({
            activeNames:[1,2],
            step:1,
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
                this.step = step;
            },
            handleClearCurrencySellTag() {
                this.$set(this.form, 'currency_sell', '');
            },
            handleClearCurrencyBuyTag() {
                this.$set(this.form, 'currency_buy', '');
            }
        },
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";
    @import "assets/scss/element-ui-colors";

    .trade-simple-mobile {
        height: 90vh;
        display: none;
        .title {
            font-size: 20px;
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
        .el-form-item__label {
            display: inline;
        }
        .currency-tab {
            display: table;
            margin: 10px auto;

        }
        .btn-wrap {
            margin-top: 10px;
        }
        .title-inner {
            margin-bottom: 10px;
            font-size: 18px;
            text-align: center;
            color: $--color-blue-light;
        }
        .el-collapse-item__content {
            padding-bottom: 10px;
        }
        .el-collapse-item__wrap {
            border-bottom: none;
        }
        .currency-sell {
            > div[role=tab] {
                > div[role=button] {
                    background: $--color-alert-danger-light;
                    color: $--color-alert-danger-text;
                    font-size: 20px;
                    padding-left: 20px;
                    height: 30px;
                }
            }
        }
        .currency-buy {
            > div[role=tab] {
                > div[role=button] {
                    background: $--color-alert-success-light;
                    color: $--color-alert-success-text;
                    font-size: 20px;
                    padding-left: 20px;
                    height: 30px;
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
            height: 128px;
            overflow: auto;
        }
    }
</style>
