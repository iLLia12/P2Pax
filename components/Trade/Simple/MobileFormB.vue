<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container trade-simple-mobile">
        <el-form ref="form" :model="form">
            <el-row  type="flex" justify="center">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="step === 1">
                    <h5 class="title">{{$t('pages.simple_trade.order_to_buy_sell_cryptocurrency')}}</h5>

                    <el-card class="box-card" :body-style="{ borderRadius:'0', paddingTop:'15px', paddingBottom:'15px'}">
                        <div>
                            <el-alert
                                :title="$t('pages.simple_trade.currency_to_sell')"
                                type="error"
                                :closable="false">
                            </el-alert>
                            <el-row>
                                <el-col style="padding-top: 10px">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :xs="{span:4, offset:10}" :sm="{span:4, offset:10}" :md="{span:4, offset:10}" :lg="{span:4, offset:10}" :xl="{span:4, offset:10}" style="display: flex;justify-content: center;">
                                            <el-dropdown trigger="click">
                                                      <span class="el-dropdown-link">
                                                          <el-button icon="el-icon-bottom" size="mini" type="primary" plain>Select Currency to Sell</el-button>
                                                      </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_sell !== 'BTC' ? 'info' : 'danger'"
                                                                   :plain="this.form.currency_sell !== 'BTC'"
                                                                   @click="selectCurrencySell('BTC')"
                                                                   size="mini" round>BTC</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_sell !== 'AC' ? 'info' : 'danger'"
                                                                   :plain="this.form.currency_sell !== 'AC'"
                                                                   @click="selectCurrencySell('AC')"
                                                                   size="mini" round>AC</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_sell !== 'USD' ? 'info' : 'danger'"
                                                                   :plain="this.form.currency_sell !== 'USD'"
                                                                   @click="selectCurrencySell('USD')"
                                                                   size="mini" round>USD</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_sell !== 'ETH' ? 'info' : 'danger'"
                                                                   :plain="this.form.currency_sell !== 'ETH'"
                                                                   @click="selectCurrencySell('ETH')"
                                                                   size="mini" round>ETH</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_sell !== 'RUB' ? 'info' : 'danger'"
                                                                   :plain="this.form.currency_sell !== 'RUB'"
                                                                   @click="selectCurrencySell('RUB')"
                                                                   size="mini" round>RUB</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_sell !== 'UAH' ? 'info' : 'danger'"
                                                                   :plain="this.form.currency_sell !== 'UAH'"
                                                                   @click="selectCurrencySell('UAH')"
                                                                   size="mini" round>UAH</el-button>
                                                    </el-dropdown-item>


                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="12">
                                            <el-form-item label="">
                                                <el-input ref="sell_amount" :placeholder="$t('pages.simple_trade.amount')" v-model="form.currency_sell_amount"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item label="">
                                                <el-input :placeholder="$t('pages.simple_trade.price')" v-model="form.currency_sell_price"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </div>
                        <el-divider><div class="icon icon_switch" style="width: 40px; height: 40px"></div></el-divider>
                        <div style="padding-top: 10px">
                            <el-alert
                                :title="$t('pages.simple_trade.currency_to_buy')"
                                type="success"
                                :closable="false">
                            </el-alert>
                            <el-row>
                                <el-col style="padding-top: 10px">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :xs="{span:4, offset:10}" :sm="{span:4, offset:10}" :md="{span:4, offset:10}" :lg="{span:4, offset:10}" :xl="{span:4, offset:10}" style="display: flex;justify-content: center;">
                                            <el-dropdown trigger="click">
                                                      <span class="el-dropdown-link">
                                                          <el-button icon="el-icon-bottom" size="mini" type="primary" plain>Select Currency to Buy</el-button>
                                                      </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_buy !== 'BTC' ? 'info' : 'success'"
                                                                   :plain="this.form.currency_buy !== 'BTC'"
                                                                   @click="selectCurrencyBuy('BTC')"
                                                                   size="mini" round>BTC</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_buy !== 'AC' ? 'info' : 'success'"
                                                                   :plain="this.form.currency_buy !== 'AC'"
                                                                   @click="selectCurrencyBuy('AC')"
                                                                   size="mini" round>AC</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_buy !== 'USD' ? 'info' : 'success'"
                                                                   :plain="this.form.currency_buy !== 'USD'"
                                                                   @click="selectCurrencyBuy('USD')"
                                                                   size="mini" round>USD</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_buy !== 'ETH' ? 'info' : 'success'"
                                                                   :plain="this.form.currency_buy !== 'ETH'"
                                                                   @click="selectCurrencyBuy('ETH')"
                                                                   size="mini" round>ETH</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_buy !== 'RUB' ? 'info' : 'success'"
                                                                   :plain="this.form.currency_buy !== 'RUB'"
                                                                   @click="selectCurrencyBuy('RUB')"
                                                                   size="mini" round>RUB</el-button>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <el-button :type="this.form.currency_buy !== 'UAH' ? 'info' : 'success'"
                                                                   :plain="this.form.currency_buy !== 'UAH'"
                                                                   @click="selectCurrencyBuy('UAH')"
                                                                   size="mini" round>UAH</el-button>
                                                    </el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                    <el-row type="flex" justify="center">
                                        <el-col :span="2">
                                            <div style="display: inline-block">{{form.currency_buy_price}}</div>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" class="btn-wrap">
                                <el-button @click="changeStep(2)" type="success">{{$t('pages.simple_trade.create_order')}}</el-button>
                            </el-row>
                        </div>
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
                currency_sell_amount:'',
                currency_sell_price:'',
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
            },
        },
        methods:{
            handleChange(val) {
                console.log(val)
            },
            handleCurrencyBuyClick(val) {
                console.log(val.target)
            },
            selectCurrencySell(currency) {
                this.$set(this.form, 'currency_sell', currency);
                this.$refs.sell_amount.$el.getElementsByTagName('input')[0].focus();
                this.$set(this.form, 'currency_sell_price', '8500')
            },
            selectCurrencyBuy(currency) {
                this.$set(this.form, 'currency_buy', currency);
                this.$set(this.form, 'currency_buy_price', '8500')
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
            }
        }
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
        .icon_switch {
            width: 40px;
        }
        .btn-wrap {
            margin-top: 10px;
        }
        .title-inner {
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
