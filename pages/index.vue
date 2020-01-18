<template>
    <div class="content-wrap">
        <el-row class="banner-row">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row class="">
                    <el-col class="banner-text-wrap">
                        <div class="free-title" >
                            {{ $t('pages.main.banner.buy_sell') }} <br> <span class="banner-text-response">{{ $t('pages.main.banner.near') }}</span>
                        </div>
                        <div class="free-stat">
                            <span>{{ $t('pages.main.banner.locations') }}</span>
                        </div>
                        <el-row>
                            <el-button class="banner-btn btn-shadow" type="success">{{ $t('pages.main.banner.sign_up') }}</el-button>
                        </el-row>
                    </el-col>
                    <el-col class="banner-img-wrap">
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
                                    <div class="benefits-text-wrap">
                                        <div class="head-title-block">
                                            {{ $t('pages.main.benefits.join') }}
                                        </div>
                                        <p class="head-text-block">
                                            {{ $t('pages.main.benefits.invite') }}
                                        </p>
                                    </div>
                                    <el-button class="benefits-btn" plain>{{ $t('pages.main.benefits.join_button') }}</el-button>
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
                                    <div class="benefits-text-wrap">
                                        <div class="head-title-block">
                                            {{ $t('pages.main.benefits.win') }}
                                        </div>
                                        <p class="head-text-block">
                                            {{ $t('pages.main.benefits.follow') }}
                                        </p>
                                    </div>
                                    <el-button class="benefits-btn" plain>{{ $t('pages.main.benefits.join_button') }}</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="sell-container">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <h1 class="title-section">{{ $t('pages.main.section_title.quick_buy') }}</h1>
                <el-card class="box-card card-inputs">
                    <el-form :inline="false" :model="formInline" class="quick-buy-table">
                        <el-form-item label="">
                            <el-select v-model="formInline.currency" :placeholder="$t('placeholders.currency')" class="search-input">
                                <el-option label="BTB" value="shanghai"></el-option>
                                <el-option label="DSA" value="beijing"></el-option>
                                <el-option label="BVV" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="formInline.user" :placeholder="$t('placeholders.amount')" class="search-input"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" :placeholder="$t('placeholders.country')" class="search-input">
                                <el-option label="Ukraine" value="shanghai"></el-option>
                                <el-option label="Belgium" value="beijing"></el-option>
                                <el-option label="Austria" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" :placeholder="$t('placeholders.payment')" class="search-input">
                                <el-option label="Other online payment" value="shanghai"></el-option>
                                <el-option label="National bank transfer" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="quick-buy-btn-wrap">
                            <el-button class="search-btn btn-pink" @click="onSubmit">{{$t('buttons.search')}}</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row>
                    <h1 class="title-section">{{ $t('pages.main.section_title.buy_online') }}</h1>
                    <el-card class="box-card main-page-table-card">
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="buyer"
                                width="235"
                                :label="$t('placeholders.buyer')">
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
                                                <el-tag size="mini" type="success" effect="plain">{{$t('tags.online')}}</el-tag>
                                            </div>
                                            <div v-else class="table-last-visit">
                                                {{$t('placeholders.last_visit')}}: {{scope.row.buyer.last_visit}}
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
                                :label="$t('placeholders.currency')">
                                <template slot-scope="scope">
                                    <el-tag effect="plain" type="warning" size="mini">{{scope.row.currency}}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="ratting"
                                width="120"
                                align="center"
                                sortable
                                :label="$t('placeholders.ratting')">
                            </el-table-column>
                            <el-table-column
                                width="200"
                                sortable
                                prop="payment_system"
                                :label="$t('placeholders.payment')">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.payment_system}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="country"
                                width="120"
                                align="center"
                                sortable
                                :label="$t('placeholders.country')">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.country}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                align="center"
                                sortable
                                :label="$t('placeholders.price')">
                            </el-table-column>
                            <el-table-column
                                prop="limits"
                                width="120"
                                align="center"
                                sortable
                                :label="$t('placeholders.limits')">
                            </el-table-column>
                            <el-table-column
                                prop=""
                                align="right"
                                label="">
                                <template slot-scope="scope">
                                    <el-button plain type="primary" size="mini">{{$t('buttons.buy')}}</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                    <el-card shadow="always" class="card-mobile-proposals">
                        <div v-for="buyer in tableData" class="buyer-card-inner-wrap">
                            <el-row class="buyer-row">
                                <el-col :xs="24" :sm="24" :md="24">
                                    <el-row>
                                        <el-col :xs="8" :sm="8" :md="8" class="table-title">
                                            {{$t('placeholders.buyer')}}
                                        </el-col>
                                        <el-col :xs="14" :sm="10" :md="10">
                                            <el-row>
                                                <el-col :xs="8" :sm="6" :md="6">
                                                    <img class="table-avatar" src="~/assets/images/unknown_user.png" alt="">
                                                </el-col>
                                                <el-col :xs="16" :sm="10" :md="10" class="buyer-col-wrap">
                                                    <div>{{buyer.buyer.name}}</div>
                                                    <div v-if="buyer.buyer.status" class="table-online">
                                                        <el-tag size="mini" type="success" effect="plain">{{$t('tags.online')}}</el-tag>
                                                    </div>
                                                    <div v-else class="table-last-visit">
                                                        {{$t('placeholders.last_visit')}}: {{buyer.buyer.last_visit}}
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.currency')}}</el-col>
                                <el-col :span="14">{{buyer.currency}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.ratting')}}</el-col>
                                <el-col :span="14">{{buyer.ratting}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.payment')}}</el-col>
                                <el-col :span="14" class="card-link">{{buyer.payment_system}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.country')}}</el-col>
                                <el-col :span="14">{{buyer.country}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.price')}}</el-col>
                                <el-col :span="14">{{buyer.price}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.limits')}}</el-col>
                                <el-col :span="14">{{buyer.limits}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col>
                                    <el-button style="width: 100%" plain type="primary" size="mini">{{$t('buttons.buy')}}</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="buy-container">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <h1 class="title-section">{{ $t('pages.main.section_title.quick_sell') }}</h1>
                <el-card class="box-card card-inputs">
                    <el-form :inline="isInline" :model="formInline" class="quick-buy-table">
                        <el-form-item label="">
                            <el-select v-model="formInline.currency" :placeholder="$t('placeholders.currency')" class="search-input">
                                <el-option label="BTB" value="shanghai"></el-option>
                                <el-option label="DSA" value="beijing"></el-option>
                                <el-option label="BVV" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="formInline.user" :placeholder="$t('placeholders.amount')" class="search-input"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" :placeholder="$t('placeholders.country')" class="search-input">
                                <el-option label="Ukraine" value="shanghai"></el-option>
                                <el-option label="Belgium" value="beijing"></el-option>
                                <el-option label="Austria" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-select v-model="formInline.region" :placeholder="$t('placeholders.payment')" class="search-input">
                                <el-option label="Other online payment" value="shanghai"></el-option>
                                <el-option label="National bank transfer" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="quick-buy-btn-wrap">
                            <el-button class="search-btn btn-pink" @click="onSubmit">{{$t('buttons.search')}}</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row>
                    <h1 class="title-section">{{ $t('pages.main.section_title.sell_online') }}</h1>
                    <el-card class="box-card main-page-table-card">
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="buyer"
                                width="235"
                                :label="$t('placeholders.buyer')">
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
                                                <el-tag size="mini" type="success" effect="plain">{{$t('tags.online')}}</el-tag>
                                            </div>
                                            <div v-else class="table-last-visit">
                                                {{$t('placeholders.last_visit')}}: {{scope.row.buyer.last_visit}}
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
                                :label="$t('placeholders.currency')">
                                <template slot-scope="scope">
                                    <el-tag effect="plain" type="warning" size="mini">{{scope.row.currency}}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="ratting"
                                width="120"
                                align="center"
                                sortable
                                :label="$t('placeholders.ratting')">
                            </el-table-column>
                            <el-table-column
                                width="200"
                                sortable
                                prop="payment_system"
                                :label="$t('placeholders.payment')">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.payment_system}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="country"
                                width="120"
                                align="center"
                                sortable
                                :label="$t('placeholders.country')">
                                <template slot-scope="scope">
                                    <a class="table-link" href="#">{{scope.row.country}}</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                align="center"
                                sortable
                                :label="$t('placeholders.price')">
                            </el-table-column>
                            <el-table-column
                                prop="limits"
                                width="120"
                                align="center"
                                sortable
                                :label="$t('placeholders.limits')">
                            </el-table-column>
                            <el-table-column
                                prop=""
                                align="right"
                                label="">
                                <template slot-scope="scope">
                                    <el-button plain type="primary" size="mini">{{$t('buttons.buy')}}</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                    <el-card shadow="always" class="card-mobile-proposals">
                        <div v-for="buyer in tableData" class="buyer-card-inner-wrap">
                            <el-row class="buyer-row">
                               <el-col :xs="24" :sm="24" :md="24">
                                   <el-row>
                                       <el-col :xs="8" :sm="8" :md="8" class="table-title">
                                           {{$t('placeholders.seller')}}
                                       </el-col>
                                       <el-col :xs="14" :sm="10" :md="10">
                                           <el-row>
                                               <el-col :xs="8" :sm="6" :md="6">
                                                   <img class="table-avatar" src="~/assets/images/unknown_user.png" alt="">
                                               </el-col>
                                               <el-col :xs="16" :sm="10" :md="10" class="buyer-col-wrap">
                                                   <div>{{buyer.buyer.name}}</div>
                                                   <div v-if="buyer.buyer.status" class="table-online">
                                                       <el-tag size="mini" type="success" effect="plain">{{$t('tags.online')}}</el-tag>
                                                   </div>
                                                   <div v-else class="table-last-visit">
                                                       {{$t('placeholders.last_visit')}}: {{buyer.buyer.last_visit}}
                                                   </div>
                                               </el-col>
                                           </el-row>
                                       </el-col>
                                   </el-row>
                               </el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.currency')}}</el-col>
                                <el-col :span="14">{{buyer.currency}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.ratting')}}</el-col>
                                <el-col :span="14">{{buyer.ratting}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.payment')}}</el-col>
                                <el-col :span="14" class="card-link">{{buyer.payment_system}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.country')}}</el-col>
                                <el-col :span="14">{{buyer.country}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.price')}}</el-col>
                                <el-col :span="14">{{buyer.price}}</el-col>
                            </el-row>
                            <el-row class="card-row">
                                <el-col :span="8">{{$t('placeholders.limits')}}</el-col>
                                <el-col :span="14">{{buyer.limits}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col>
                                    <el-button style="width: 100%" plain type="primary" size="mini">{{$t('buttons.buy')}}</el-button>
                                </el-col>
                            </el-row>
                        </div>
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
        width: 30%;
        right: 150px;
    }
    .img-banner {
        right: 250px;
        position: relative;
    }
    .banner-text-wrap {
        width: 70%;
        margin-top: 50px;
    }
    .banner-btn {
        position: relative;
        z-index: 2;
        width: 40%;
        height: 60px;
        font-size: 22px;
        font-weight: 800;
    }
    .head-title-block {
        //height: 50px;
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
    .benefits-text-wrap {
        height: 95px;
    }
    .head-text-block {
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
        color: $--color-grey-light;
    }
    .card-mobile-proposals {
        display: none;
    }
    .buyer-card-inner-wrap {
        padding-bottom: 20px;
    }
    .buyer-row {
        background: $--bg-primary;
        color: white;
        padding:  15px 20px ;
    }
    .buyer-name {
        font-weight: 700;
        padding-top: 5px;
    }
    .card-link {
        text-decoration: none;
        color: #409EFF;
    }
    .buyer-title {
        padding-top: 15px;
        font-weight: 700;
    }
    .card-row {
        padding-left: 20px;
    }
    .buyer-col-wrap {
        padding-top: 5px;
    }
    .table-title {
        padding-top: 15px;
    }
</style>
