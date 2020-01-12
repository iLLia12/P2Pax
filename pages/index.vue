<template>
    <div class="content-wrap">
        <el-row class="banner-row">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row class="">
                    <el-col class="banner-text-wrap">
                        <div class="free-title" >
                            <!--:xs="8" :sm="8" :md="8" :lg="8" :xl="8"-->
                            Buy and Sell <br> <span class="banner-text-response">cryptocurrency near you</span>
                        </div>
                        <div class="free-stat">
                            <span>14109 cities and 249 countries including Ukraine</span>
                        </div>
                        <el-row>
                            <el-button class="banner-btn btn-shadow" type="success">Sign Up For Free</el-button>
                        </el-row>
                    </el-col>
                    <el-col class="banner-img-wrap">
                        <!--:xs="12" :sm="12" :md="12" :lg="12" :xl="12"-->
                        <img class="img-banner" src="~/assets/images/title-pic.png" alt="logo">
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="outer-container">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row type="flex" justify="space-between benefits-flex-disabler">
                    <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="benefits-col-wrap">
                        <el-card class="box-card" :body-style="{height:'175px', borderRadius:'0'}">
                            <el-row class="benefits-inner-wrap">
                                <el-col class="benefits-col benefits-money" :xs="6" :sm="6" :md="7" :lg="6" :xl="6">
                                    <img class="img-present" src="~/assets/images/money.png" alt="logo">
                                </el-col>
                                <el-col class="benefits-col" :offset="1" :md="17">
                                    <div class="head-title-block">
                                        Join our referral program
                                    </div>
                                    <p class="head-text-block">
                                        Invite your friends and earn up to 50% of commission!
                                    </p>
                                    <el-button class="benefits-btn" plain>Join now</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
                        <el-card class="box-card" :body-style="{height:'175px', borderRadius:'0'}">
                            <el-row class="benefits-inner-wrap" >
                                <el-col class="benefits-col benefits-present" :xs="6" :sm="6" :md="7" :lg="6" :xl="6">
                                    <img class="img-present" src="~/assets/images/present.png" alt="logo">
                                </el-col>
                                <el-col class="benefits-col" :offset="1" :md="17">
                                    <div class="head-title-block">
                                        Win prizes
                                    </div>
                                    <p class="head-text-block">
                                        Join our community, follow the news and learn how to win prizes.
                                    </p>
                                    <el-button class="benefits-btn" plain>Join now</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="sell-container">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <h1 class="title-section">Quick buy</h1>
                <el-card class="box-card card-inputs">
                    <el-form :inline="false" :model="formInline" class="quick-buy-table">
                        <el-form-item label="">
                            <el-select v-model="formInline.currency" placeholder="Currency" class="search-input">
                                <el-option label="BTB" value="shanghai"></el-option>
                                <el-option label="DSA" value="beijing"></el-option>
                                <el-option label="BVV" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="formInline.user" placeholder="Amount" class="search-input"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" placeholder="Country" class="search-input">
                                <el-option label="Ukraine" value="shanghai"></el-option>
                                <el-option label="Belgium" value="beijing"></el-option>
                                <el-option label="Austria" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" placeholder="Payment" class="search-input">
                                <el-option label="Other online payment" value="shanghai"></el-option>
                                <el-option label="National bank transfer" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="quick-buy-btn-wrap">
                            <el-button class="search-btn" type="primary" @click="onSubmit">Search</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row>
                    <h1 class="title-section">Buy online</h1>
                    <el-card class="box-card">
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="buyer"
                                width="235"
                                label="Buyer">
                                <template slot-scope="scope">
                                    <el-row>
                                        <el-col :span="7">
                                            <img class="table-avatar" src="~/assets/images/unknown_user.png" alt="">
                                        </el-col>
                                        <el-col :span="15">
                                            <div class="table-user-name">
                                                {{scope.row.buyer.name}}
                                            </div>
                                            <div v-if="scope.row.buyer.status" class="table-online">
                                                <el-tag size="mini" type="success" effect="plain">Online</el-tag>
                                            </div>
                                            <div v-else class="table-last-visit">
                                                Last visit at: {{scope.row.buyer.last_visit}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="currency"
                                width="120"
                                align="center"
                                sortable
                                label="Currency">
                                <template slot-scope="scope">
                                    <el-tag effect="plain" type="warning" size="mini">{{scope.row.currency}}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="ratting"
                                width="120"
                                align="center"
                                sortable
                                label="Ratting">
                            </el-table-column>
                            <el-table-column
                                width="200"
                                sortable
                                prop="payment_system"
                                label="Payment">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.payment_system}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="country"
                                width="120"
                                align="center"
                                sortable
                                label="Country">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.country}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                align="center"
                                sortable
                                label="Price">
                            </el-table-column>
                            <el-table-column
                                prop="limits"
                                width="120"
                                align="center"
                                sortable
                                label="Limits">
                            </el-table-column>
                            <el-table-column
                                prop=""
                                align="right"
                                label="">
                                <template slot-scope="scope">
                                    <el-button plain type="primary" size="mini">buy</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="buy-container">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <h1 class="title-section">Quick sell</h1>
                <el-card class="box-card card-inputs">
                    <el-form :inline="isInline" :model="formInline" class="quick-buy-table">
                        <el-form-item label="">
                            <el-select v-model="formInline.currency" placeholder="Currency" class="search-input">
                                <el-option label="BTB" value="shanghai"></el-option>
                                <el-option label="DSA" value="beijing"></el-option>
                                <el-option label="BVV" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="formInline.user" placeholder="Amount" class="search-input"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" placeholder="Country" class="search-input">
                                <el-option label="Ukraine" value="shanghai"></el-option>
                                <el-option label="Belgium" value="beijing"></el-option>
                                <el-option label="Austria" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" placeholder="Payment" class="search-input">
                                <el-option label="Other online payment" value="shanghai"></el-option>
                                <el-option label="National bank transfer" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="quick-buy-btn-wrap">
                            <el-button class="search-btn" type="primary" @click="onSubmit">Search</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row>
                    <h1 class="title-section">Sell online</h1>
                    <el-card class="box-card">
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="buyer"
                                width="235"
                                label="Buyer">
                                <template slot-scope="scope">
                                    <el-row>
                                        <el-col :span="7">
                                            <img class="table-avatar" src="~/assets/images/unknown_user.png" alt="">
                                        </el-col>
                                        <el-col :span="15">
                                            <div class="table-user-name">
                                                {{scope.row.buyer.name}}
                                            </div>
                                            <div v-if="scope.row.buyer.status" class="table-online">
                                                <el-tag size="mini" type="success" effect="plain">Online</el-tag>
                                            </div>
                                            <div v-else class="table-last-visit">
                                                Last visit at: {{scope.row.buyer.last_visit}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="currency"
                                width="120"
                                align="center"
                                sortable
                                label="Currency">
                                <template slot-scope="scope">
                                    <el-tag effect="plain" type="warning" size="mini">{{scope.row.currency}}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="ratting"
                                width="120"
                                align="center"
                                sortable
                                label="Ratting">
                            </el-table-column>
                            <el-table-column
                                width="200"
                                sortable
                                prop="payment_system"
                                label="Payment">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.payment_system}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="country"
                                width="120"
                                align="center"
                                sortable
                                label="Country">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.country}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                align="center"
                                sortable
                                label="Price">
                            </el-table-column>
                            <el-table-column
                                prop="limits"
                                width="120"
                                align="center"
                                sortable
                                label="Limits">
                            </el-table-column>
                            <el-table-column
                                prop=""
                                align="right"
                                label="">
                                <template slot-scope="scope">
                                    <el-button plain type="primary" size="mini">buy</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'

    export default {
        components: {
            Logo
        },
        data:() => ({
            formInline: {
                user: '',
                currency: '',
                region: ''
            },
            tableData: [{
                buyer:{
                    name:'Frozen Yogurt',
                    last_visit:'2020:02:01',
                    status:false
                },
                currency:'BTN',
                ratting:7,
                payment_system:'Other online payment',
                country:'Belgium',
                price:12223,
                limits:'100-300000',
                },
                {
                    buyer:{
                        name:'Frozen Yogurt',
                        last_visit:'2020:02:01',
                        status:true
                    },
                    currency:'LDM',
                    ratting:2,
                    payment_system:'National bank transfer',
                    country:'Austria',
                    price:3221,
                    limits:'100-20300',
                },
                {
                    buyer:{
                        name:'Frozen Yogurt',
                        last_visit:'2020:02:01',
                        status:true
                    },
                    currency:'HDN',
                    ratting:9,
                    payment_system:'National bank transfer',
                    country:'Germany',
                    price:331,
                    limits:'100-320300',
                }
            ]
        }),
        computed:{
            innerWidthComputed(){
                return false
            },
            isInline() {
                return this.innerWidthComputed > 600
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";
    .content-wrap {
        padding-bottom: 20px;
    }
    .banner-row {
        height: 380px;
        background: $--bg-primary;
    }
    .free-title {
        font-weight: bold;
        font-size: 40px;
        line-height: normal;
        color: #FFFFFF;
        margin-bottom: 28px;
    }
    .free-stat {
        font-size: 20px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
    .quick-buy-table {
        display: flex;
        justify-content: space-between;
    }
    .quick-buy-btn-wrap {
        display: flex !important;
        justify-content: flex-end !important;
        margin-right: 0!important;
    }
    .banner-img-wrap {
        position: relative;
        width: 50%;
        right: 150px;
    }
    .banner-text-wrap {
        width: 50%;
        margin-top: 50px;
    }
    .banner-btn {
        width: 70%;
        height: 60px;
        font-size: 22px;
        font-weight: 800;
    }
    .head-title-block {
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: normal;
        color: #1D1D1D;
    }
    .outer-container {
        margin-top: 50px;
    }
    .sell-container {
        margin-top: 70px;
    }
    .buy-container {
        margin-top: 70px;
    }
    .head-text-block {
        height: 70px;
        padding-top: 10px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
    }
    .benefits-btn {
        width: 100%;
        font-weight: 700;
    }
    .benefits-money {
        margin-top: 7px;
    }
    .benefits-present {
        margin-top: 25px;
    }
    .card-inputs {
        height: 80px;
    }
    .table-avatar {
        width: 40px;
        border-radius: 50px
    }
    .table-user-name,.table-last-visit {
        font-size: 12px;
    }
    .table-online {
        font-size: 11px;
        color: green;
    }
    .table-link {
        text-decoration: none;
        color: #409EFF;
     }
    .title-section {
        margin-bottom: 20px;
        color: #c5c8d0;
    }
</style>
