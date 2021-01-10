<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container trade-simple-desktop">
        <el-form ref="form" :model="form">
            <el-row>
                <el-col>
                    <el-steps :active="activeStep" finish-status="success">
                        <el-step title="Step 1" description="Select currency"></el-step>
                        <el-step title="Step 2" description="Select currency"></el-step>
                        <el-step title="Step 3"></el-step>
                        <el-step title="Step 4"></el-step>
                    </el-steps>
                </el-col>
            </el-row>
            <el-row v-if="activeStep === 0">
                <el-row>
                    <el-col :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                        <el-card class="box-card" :body-style="{ borderRadius:'0', paddingTop:'15px', paddingBottom:'5px'}">
                            <el-row>
                                <h3 class="title">{{$t('pages.simple_trade.currency_to_sell')}}</h3>
                                <el-col v-if="!(!!form.currency_sell.length)" class="currency-tag-wrap">
                                    <el-button @click="selectCurrencySell('BTC')"
                                               :type="form.currency_sell === 'BTC' ? 'primary' : ''"
                                               size="mini">BTC</el-button>
                                    <el-button @click="selectCurrencySell('ETH')"
                                               :type="form.currency_sell === 'ETH' ? 'primary' : ''"
                                               size="mini">ETH</el-button>
                                    <el-button @click="selectCurrencySell('AC')"
                                               :type="form.currency_sell === 'AC' ? 'primary' : ''"
                                               size="mini">AC</el-button>
                                    <el-button @click="selectCurrencySell('USD')"
                                               :type="form.currency_sell === 'USD' ? 'primary' : ''"
                                               size="mini">USD</el-button>
                                    <el-button @click="selectCurrencySell('RUB')"
                                               :type="form.currency_sell === 'RUB' ? 'primary' : ''"
                                               size="mini">RUB</el-button>
                                    <el-button @click="selectCurrencySell('UAH')"
                                               :type="form.currency_sell === 'UAH' ? 'primary' : ''"
                                               size="mini">UAH</el-button>
                                </el-col>
                                <el-col v-if="!!form.currency_sell.length" class="currency-tag-wrap">
                                    <el-tag
                                        class="currency-tag"
                                        closable
                                        :disable-transitions="false"
                                        @close="handleClearCurrencySellTag()">
                                        {{form.currency_sell}}
                                    </el-tag>
                                </el-col>
                                <el-col v-if="!!form.currency_sell.length">
                                    <el-form-item label="" class="input-wrap">
                                        <el-input :placeholder="$t('pages.simple_trade.amount')" v-model="form.currency_sell_amount"></el-input>
                                    </el-form-item>
                                    <el-form-item label="" class="input-wrap">
                                        <el-input :placeholder="$t('pages.simple_trade.price')" v-model="form.currency_sell_price"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="title">{{$t('pages.simple_trade.currency_to_buy')}}</h3>
                                <el-col v-if="!(!!form.currency_buy.length)" class="currency-tag-wrap">
                                    <el-button @click="selectCurrencyBuy('BTC')"
                                               :type="form.currency_buy === 'BTC' ? 'primary' : ''"
                                               size="mini">BTC</el-button>
                                    <el-button @click="selectCurrencyBuy('ETH')"
                                               :type="form.currency_buy === 'ETH' ? 'primary' : ''"
                                               size="mini">ETH</el-button>
                                    <el-button @click="selectCurrencyBuy('AC')"
                                               :type="form.currency_buy === 'AC' ? 'primary' : ''"
                                               size="mini">AC</el-button>
                                    <el-button @click="selectCurrencyBuy('USD')"
                                               :type="form.currency_buy === 'USD' ? 'primary' : ''"
                                               size="mini">USD</el-button>
                                    <el-button @click="selectCurrencyBuy('RUB')"
                                               :type="form.currency_buy === 'RUB' ? 'primary' : ''"
                                               size="mini">RUB</el-button>
                                    <el-button @click="selectCurrencyBuy('UAH')"
                                               :type="form.currency_buy === 'UAH' ? 'primary' : ''"
                                               size="mini">UAH</el-button>
                                </el-col>
                                <el-col v-if="!!form.currency_buy.length" class="currency-tag-wrap">
                                    <el-tag
                                        class="currency-tag"
                                        closable
                                        :disable-transitions="false"
                                        @close="handleClearCurrencyBuyTag()">
                                        {{form.currency_buy}}
                                    </el-tag>
                                </el-col>
                                <el-col v-if="!!form.currency_buy.length">
                                    <el-form-item label="" class="input-wrap">
                                        <el-input :placeholder="$t('pages.simple_trade.amount')" v-model="form.currency_buy_amount"></el-input>
                                    </el-form-item>
                                    <el-form-item label="" class="input-wrap">
                                        <el-input :placeholder="$t('pages.simple_trade.price')" v-model="form.currency_buy_price"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <div>
                        <el-button type="success" @click="nextStep">{{$t('pages.simple_trade.next')}}</el-button>
                    </div>
                </el-row>
            </el-row>
            <el-row v-if="activeStep === 1">
                <el-col :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <h3 class="title">{{$t('pages.simple_trade.exchange_rate_to_sell')}}</h3>
                        <el-row class="mt-15">
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
                            <el-button @click="prevStep">{{$t('pages.simple_trade.back')}}</el-button>
                            <el-button @click="nextStep" type="success">{{$t('pages.simple_trade.next')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
            <el-row v-if="activeStep === 2">
                <el-col :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <h3 class="title">{{$t('pages.simple_trade.where_to_get')}}</h3>
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
                        <el-row type="flex" justify="center" class="btn-wrap">
                            <el-button @click="prevStep">{{$t('pages.simple_trade.back')}}</el-button>
                            <el-button @click="nextStep" type="success">{{$t('pages.simple_trade.next')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
            <el-row v-if="activeStep === 3">
                <el-col :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <p class="title">{{$t('pages.simple_trade.filter_buyers')}}</p>
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
                            <el-button @click="prevStep">{{$t('pages.simple_trade.back')}}</el-button>
                            <el-button @click="nextStep" type="success">{{$t('pages.simple_trade.next')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
            <el-row v-if="activeStep === 4">
                <el-col :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                    <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                        <el-row type="flex" justify="center">
                            <el-button style="border-radius: 50%!important;" type="success" icon="el-icon-check" circle></el-button>
                        </el-row>
                        <el-row type="flex" justify="center" class="btn-wrap">
                            <el-button @click="prevStep">{{$t('pages.simple_trade.back')}}</el-button>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>
        </el-form>
    </el-col>
</template>

<script>

    export default {
        name: "DesktopForm",
        data:() => ({
            activeStep:0,
            form:{
                currency_sell_amount:'',
                currency_sell_price:8500,
                currency_buy_amount:'',
                currency_buy_price:'',
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
            nextStep() {
                this.activeStep ++;
            },
            prevStep() {
                this.activeStep --;
            },
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
        watch:{
            'form.currency_sell_amount': function(val) {
                if(val){
                    this.$set(this.form, 'currency_buy_amount', 8500);
                }else {
                    this.$set(this.form, 'currency_buy_amount', '');
                }
            },
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
        .currency-tag-wrap {
            display: flex;
            justify-content: center;
            padding-top: 10px;
            > button {
                width: 70px;
                margin-bottom: 5px  ;
            }
        }
        .title {
            text-align: center;
            font-size: 22px;
            color: $--color-text-secondary;
        }
        .currency-tag {
            display: inline-block;
        }
        .inputs-wrap {
            display: flex;
            justify-content: center;
        }
        .input-wrap {
            width: 100px;
            margin:5px auto;
        }
        .profit-input {
            display: block;
        }
        .sub-title {
            text-align: center;
        }
        .title-inner {
            margin-bottom: 10px;
            font-size: 18px;
            text-align: center;
            color: $--color-blue-light;
        }
    }
</style>
