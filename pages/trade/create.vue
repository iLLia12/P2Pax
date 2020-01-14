<template>
    <div class="content-wrap">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="join-col">
                        <div class="bg-img-left">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="19" :xl="19" class="join-col-text">
                                    Join our referral program and receive bonuses
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="5" :xl="5" class="proposal-btn-wrap">
                                    <el-button plain class="proposal-btn">Join now</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="follow-col">
                        <div class="bg-img-right">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="19" :xl="19" class="follow-col-text">
                                    Follow our promotions and get discounts
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="5" :xl="5" class="proposal-btn-wrap">
                                    <el-button plain class="proposal-btn">More</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-collapse v-model="activeNames" class="advertisement-rules">
                    <el-collapse-item title="Advertisement rules and requirements" name="1" class="advertisement-rules-collapse">
                        <ul>
                            <li class="li-rules">To submit ads, you need to have Bitcoins in the P2PAX.COM wallet.</li>
                            <li class="li-rules">To be able to use certain payment methods, you need to pass an identity check. Only after that your ads will be visible</li>
                            <li class="li-rules">If you did not find the payment system you are interested in, you can send the corresponding ticket to the support or fill out the appropriate form by clicking on the link</li>
                            <li class="li-rules">The fee for each user who placed an ad for every deal is 0.4% of the total amount of the transaction. You can find information on all fees on the relevant page of our website.</li>
                            <li class="li-rules">Once a trade is open you can not change the price, except when there is a clear mistake in the pricing.</li>
                            <li class="li-rules">You are not allowed to buy or sell bitcoins on behalf of other persons (brokerage)</li>
                            <li class="li-rules">You can only use payment accounts registered in your own name (payments from third parties are prohibited!)</li>
                            <li class="li-rules">You must specify your payment details in the ad or trade chat. Payment details specified in the ad are available to counterparties, only after you confirm the request for an exchange</li>
                            <li class="li-rules">All communication must happen on P2PAX.COM</li>
                            <li class="li-rules">Payment methods marked as "High risk" involve a significant risk of fraud. Be cautious and always check the identity of your trade partners if you use a high-risk payment method</li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
                <el-card class="box-card box-card-create-trade" :body-style="{height:'175px', borderRadius:'0'}">
                    <el-form label-position="right" label-width="220px" :model="formLabelAlign">
                        <el-form-item label="Resources" prop="resource">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-radio-group v-model="formLabelAlign.resource">
                                        <el-radio label="online"></el-radio>
                                        <el-radio label="offline"></el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        What kind of trade advertisement do you wish to create? If you wish to sell bitcoins make sure you have bitcoins in your P2PAX wallet.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Location" prop="resource">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-select
                                        v-model="value"
                                        filterable
                                        remote
                                        reserve-keyword
                                        placeholder="Please enter a keyword"
                                        :remote-method="remoteMethod"
                                        :loading="loading">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Resources" prop="resource">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-button>0 BTC</el-button>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        Ability to create a Sell Ad in 2 clicks
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-row>
                                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                                            <div>Sell</div>
                                            <el-form-item label="">
                                                <el-select
                                                    v-model="value"
                                                    filterable
                                                    remote
                                                    reserve-keyword
                                                    placeholder="Please enter a keyword"
                                                    :remote-method="remoteMethod"
                                                    :loading="loading">
                                                    <el-option
                                                        v-for="item in options"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                            <div>Amount</div>
                                            <el-form-item label="">
                                                <el-input placeholder="Please input" v-model="formLabelAlign.input"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                            <div class="icon-exchange-wrap">
                                                <i class="el-icon-refresh icon-exchange"></i>
                                            </div>
                                        </el-col>
                                        <el-col :xs="{span:8, offset:1}" :sm="{span:8, offset:1}" :md="{span:8, offset:1}" :lg="{span:8, offset:1}" :xl="{span:8, offset:1}">
                                            <div>Buy</div>
                                            <el-form-item label="">
                                                <el-select
                                                    v-model="value"
                                                    filterable
                                                    remote
                                                    reserve-keyword
                                                    placeholder="Please enter a keyword"
                                                    :remote-method="remoteMethod"
                                                    :loading="loading">
                                                    <el-option
                                                        v-for="item in options"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                            <div>Amount</div>
                                            <el-form-item label="">
                                                <el-input placeholder="Please input" v-model="formLabelAlign.input"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Rate equation">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.region"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        Now the trade price is determined from the hourly market price. For more information about equations how
                                        to determine your trading price see pricing FAQ. Please note that the advertiser is always responsible for all payment processing fees.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Price (UAH)">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Payment method">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-select
                                        v-model="value"
                                        filterable
                                        remote
                                        reserve-keyword
                                        placeholder="Please enter a keyword"
                                        :remote-method="remoteMethod"
                                        :loading="loading">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Bank name">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Payment Details">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Min price on market now">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        The minimum price among all orders from other users on this exchange
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Margin % (profit)">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        Profit Margin you want over the bitcoin market price. Use a negative value for buying or selling under
                                        the market price to attract more contacts. For more complex pricing edit the price equation directly.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Minimum transaction limit (UAH)">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        Don't accept offers less than amount. This is helpful to eliminate trades for micro amounts.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Maximum transaction limit (UAH)">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        Maximum transaction limit in one trade. It is necessary to lower your risk within one transaction.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-checkbox v-model="formLabelAlign.checked">
                                        Auto-adjust transaction limit according to price of cryptocurrency
                                    </el-checkbox>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        When cryptocurrency price changes, your maximum limit will be auto-adjusted according to the price (to be able to carry out the trade with one transaction when price fluctuates)
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Terms of Trade">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input
                                        type="textarea"
                                        autosize
                                        placeholder=""
                                        v-model="formLabelAlign.textarea">
                                    </el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        Other information you wish to tell about your trade. Example 1: This advertisement is only for cash trades. Example 2: Please make request only when you can complete the payment with cash within 12 hours.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                            <el-checkbox v-model="formLabelAlign.checked">
                                                Verified users only
                                            </el-checkbox>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                            <el-checkbox v-model="formLabelAlign.checked">
                                                Trusted users only
                                            </el-checkbox>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                            <el-checkbox v-model="formLabelAlign.checked">
                                                Identify user before continue trade
                                            </el-checkbox>
                                        </el-col>
                                    </el-row>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        To contact your advertisement, users need to verify their identity by sending IDs, driver's licence or passport.
                                    </div>
                                    <div class="form-hits">
                                        Restrict your advertisement to be shown only to users that you have marked as Trusted. Learn how to mark users as trusted.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-collapse v-model="activeNames" class="advertisement-rules">
                                        <el-collapse-item title=" Set your work time. If you uncheck the box, the corresponding day will be set as a holiday." name="2" class="time-collapse">
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Mo:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Tu:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        We:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Th:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Fr:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Sa:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Su:&#9;
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        start-placeholder="Start time"
                                                        end-placeholder="End time">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                        </el-collapse-item>
                                    </el-collapse>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13" class="create-btn-wrap">
                                    <el-button type="primary" plain>Create</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                labelPosition: 'left',
                activeNames: '',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: '',
                    resource:'online',
                    input:'',
                    checked:'',
                    textarea:'',
                    time1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                },
                options: [],
                value: '',
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"]
            };
        },
        mounted() {
            this.list = this.states.map(item => {
                return { value: `value:${item}`, label: `label:${item}` };
            });
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options = [];
                }
            }
        }
    }
</script>

<style lang="scss">
    .advertisement-rules {
        margin: 40px 0 20px 0;
    }
    .box-card-create-trade {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    .form-hits {
        font-size: 12px;
        color: gray;
        line-height: 1;
    }
    /deep/.form-label-top {
        /deep/ .el-form-item__label {
            height: 30px;
        }
    }
    .el-select {
        width: 100%;
    }
    .el-input__inner {
        width: 100% !important;
    }
    .advertisement-rules-collapse {
        .el-collapse-item__header {
            padding-left: 20px;
            font-size: 18px;
            color: #c5c8d0;
        }
    }
    .time-collapse {
        .el-collapse-item__header {
            padding-left: 20px;
            font-size: 12px;
            color: #c5c8d0;
        }
        .el-checkbox__label {
            padding-left: 5px;
        }
        .el-checkbox {
            margin-top: 5px;
        }
    }
    .icon-exchange-wrap {
        padding-top: 80px;
        width: 70px;
        display: flex;
        justify-content: center;
    }
    .icon-exchange {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
    }
    .bg-img-left {
        background-image: url("../../assets/images/green-bg.png");
        height: 50px;
        color: white;
    }
    .bg-img-right {
        background-image: url("../../assets/images/white-bg.png");
        height: 50px;
        color: white;
    }
    .join-col {
        background: #3b8070;
        border-radius: 0;
        height: 50px;
    }
    .follow-col {
        background: dodgerblue;
        border-radius: 0;
        height: 50px;
    }
    .join-col-text, .follow-col-text {
        height: 100%;
        text-align: center;
        padding-top: 15px;
    }
    .proposal-btn-wrap {
        padding: 5px 10px 0 0;
    }
    .proposal-btn {
        width: 100%;
        color: #c5c8d0;
        font-weight: 600;
    }
    .li-rules {
        color: #909399;
    }
    .create-btn-wrap {
        display: flex;
        justify-content: flex-end;
    }
</style>
