<template>
    <el-row class="content-wrap wallets-index-wrap">
        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="side-menu-wrap">
                    <SideMenu />
                </el-col>
                <el-col :xs="24" :sm="24" :md="{span:19, offset:1}" :lg="{span:19, offset:1}" :xl="{span:19, offset:1}">
                    <el-row>
                        <el-col>
                            <h1 class="profile-title">My Wallets</h1>
                            <el-card class="box-card profile-menu-wrap" :body-style="{ borderRadius:'0'}">
                                <el-form label-position="top" :model="form" :inline="true" class="form-filters">
                                    <el-row>
                                        <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}">
                                            <el-form-item label="" style="width: 100%">
                                                <el-select v-model="form.country" placeholder="" class="search-input" style="width: 100%">
                                                    <el-option label="Ukraine" value="shanghai"></el-option>
                                                    <el-option label="Australia" value="beijing"></el-option>
                                                    <el-option label="Belgium" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}">
                                            <el-form-item label="" style="width: 100%">
                                                <el-input placeholder="" v-model="form.country"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}">
                                            <el-form-item label="" style="width: 100%">
                                                <el-input placeholder="" v-model="form.country"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}">
                                            <el-form-item label="" style="width: 100%">
                                                <el-input placeholder="" v-model="form.country"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form>
                                <el-table
                                    :data="wallets"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="currency"
                                        label="Coin"
                                        sortable
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="available"
                                        label="Available"
                                        sortable
                                        width="120">
                                        <template slot-scope="scope">
                                            <div>{{scope.row.available}}</div>
                                            <div class="table-symbol">{{scope.row.symbol}}</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="frozen"
                                        label="Frozen"
                                        sortable
                                        width="120">
                                        <template slot-scope="scope">
                                            <div>{{scope.row.frozen}}</div>
                                            <div class="table-symbol">{{scope.row.symbol}}</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="operation"
                                        label="Operation"
                                        sortable
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        align="right"
                                        prop=""
                                        label="">
                                        <template slot-scope="scope">
                                            <el-row>
                                                <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:23, offset:1}" :lg="{span:23, offset:1}" :xl="{span:4, offset:1}">
                                                    <el-button size="mini" round>Deposit</el-button>
                                                </el-col>
                                                <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:23, offset:1}" :lg="{span:23, offset:1}" :xl="{span:4, offset:1}">
                                                    <el-button size="mini" round>Deposit</el-button>
                                                </el-col>
                                                <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:23, offset:1}" :lg="{span:23, offset:1}" :xl="{span:4, offset:1}">
                                                    <el-button size="mini" round>Transfer</el-button>
                                                </el-col>
                                                <el-col :xs="{span:23, offset:1}" :sm="{span:23, offset:1}" :md="{span:23, offset:1}" :lg="{span:23, offset:1}" :xl="{span:4, offset:1}">
                                                    <el-button size="mini" round>History</el-button>
                                                </el-col>
                                            </el-row>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import SideMenu from "../../components/Profile/SideMenu";
    export default {
        name: "wallets",
        components:{
            SideMenu
        },
        data:() => ({
            form:{},
            wallets:[
                {
                    currency:"Bitcoin", symbol:"BTC", available:0, frozen:0, operation: 0.00000000
                },
                {
                    currency:"Ethereum", symbol:"ETH", available:0, frozen:0, operation: 0.00000000
                },
                {
                    currency:"Au Coin", symbol:"XAU", available:0, frozen:0, operation: 0.00000000
                },
                {
                    currency:"ShowHand", symbol:"HAND", available:0, frozen:0, operation: 0.00000000
                },
                {
                    currency:"Ripple", symbol:"XRP", available:0, frozen:0, operation: 0.00000000
                },
                {
                    currency:"Zagadov Coin", symbol:"ZC", available:0, frozen:0, operation: 0.00000000
                },
                {
                    currency:"Affil Coin", symbol:"AC", available:109.46, frozen:0.5, operation: 0.00000000
                },

            ]
        })
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

    .wallets-index-wrap {
        margin-top: 40px;
        .profile-title {
            margin-bottom: 30px;
            color: $--color-grey-light;
        }
        .form-filters {
            padding: 10px 40px 0 0;
        }
        .table-symbol {
            font-size: 10px;
            color: $--color-text-secondary;
        }
    }
</style>
