<template>
    <el-row class="content-wrap friends-index-wrap">
        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="side-menu-wrap">
                    <SideMenu />
                </el-col>
                <el-col :xs="24" :sm="24" :md="{span:19, offset:1}" :lg="{span:19, offset:1}" :xl="{span:19, offset:1}">
                    <el-row class="wallets-inner-wrap">
                        <el-col>
                            <el-tabs type="border-card">
                                <el-tab-pane label="Dashboard">
                                    <el-row class="custom-sidebar-top">
                                        <el-col :span="22" class="partner-img-mobile-wrap">
                                            <img src="~/assets/images/svg/reff.svg" alt="">
                                        </el-col>
                                        <el-col :xs="23" :sm="23" :md="23" :lg="12" :xl="12" class="dashboard-text-wrap">
                                            <div class="title-reff">
                                                Refer a friend, earn up to 50% of commission and stand a chance to win prizes!
                                            </div>
                                            <div class="partner-text">
                                                Invite your friends via social media or email and track performance - number of invitations, clicks, sign ups, referral network and overall performance.
                                            </div>
                                            <div class="dashboard-btn-wrap">
                                                <el-button type="primary">How it works?</el-button>
                                            </div>
                                        </el-col>
                                        <el-col :span="12" class="partner-img-wrap">
                                            <img src="~/assets/images/svg/reff.svg" alt="">
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="My referrals">My referrals</el-tab-pane>
                                <el-tab-pane label="How it works">How it works</el-tab-pane>
                                <el-tab-pane label="Competition">Competition</el-tab-pane>
                            </el-tabs>
                        </el-col>
                    </el-row>

                    <el-row class="contacts-dashboard-tab">
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10" class="payable-block">
                                <p class="payable-title">Payable Rewords</p>
                                <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                                    <el-row style="padding:0 10px">
                                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" class="payable-header-title">0.00 USD</el-col>
                                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14">
                                            <el-button type="primary">Withdraw</el-button>
                                            <el-button type="primary">Transfer</el-button>
                                        </el-col>
                                    </el-row>
                                    <el-divider></el-divider>
                                    <el-row>
                                        <p class="referral-network-title">My Referral Network</p>
                                        <el-table
                                            class="referral-network"
                                            empty-text="no result"
                                            :data="payableRewordsTable"
                                            style="width: 100%">
                                            <el-table-column
                                                prop="level"
                                                width="80"
                                                align="left"
                                                label="Level">
                                            </el-table-column>
                                            <el-table-column
                                                prop="percent"
                                                width="80"
                                                align="left"
                                                label="Percent">
                                            </el-table-column>
                                            <el-table-column
                                                align="left"
                                                prop="referrals"
                                                label="Number of referrals">
                                            </el-table-column>
                                        </el-table>
                                    </el-row>
                                </el-card>
                            </el-col>
                            <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:13, offset:1}" class="second-table">
                                <el-card class="box-card" :body-style="{ borderRadius:'0'}">
                                    <el-table
                                        :data="tableData"
                                        class="referral-second-table"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="number"
                                            label="№"
                                            width="60">
                                        </el-table-column>
                                        <el-table-column
                                            prop="registration_type"
                                            label="Registration type"
                                            width="100">
                                        </el-table-column>
                                        <el-table-column
                                            prop="number_of_referrals"
                                            label="Number of referrals"
                                            width="110">
                                        </el-table-column>
                                        <el-table-column
                                            prop="invited_by_me"
                                            width="110"
                                            label="Invited by me">
                                        </el-table-column>
                                        <el-table-column
                                            prop="invited_by_referrals"
                                            label="Invited by Referrals">
                                        </el-table-column
                                           >
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
        name: "contacts",
        components:{
            SideMenu
        },
        data:() => ({

            activeTab:"Dashboard",
            payableRewordsTable:[],
            tableData:[
                {
                    number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
                },
                {
                    number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
                },{
                    number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
                },{
                    number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
                },
                {
                    number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
                },
                {
                    number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
                },


            ]
        }),
        mounted() {

        }
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

    .friends-index-wrap {
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
        .btn-wrap {
            display: block;
        }
        .big-buttons-wrap {
            display: none;
        }
        .btn-mob-wrap {
            margin-bottom: 10px;
            > button {
                width: 100%
            }
        }
        .el-tabs__content {
            padding: 0;
        }
        .title-reff {
            font-size: 24px;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 20px;
        }
        .wallets-inner-wrap {
            margin-bottom: 30px;
        }
        .partner-img-mobile-wrap {
            display: none;
        }
        .partner-text {
            font-size: 14px;
            margin: 0 0 10px;
            color: $--color-text-secondary;
        }
        .custom-sidebar-top {
            padding: 20px 0 0 50px;
        }
        .partner-img-wrap {
            display: flex;
            justify-content: flex-end;
        }
        .contacts-dashboard-tab {
            .second-table {
                margin-top: 30px;
            }
        }
        .payable-block {
            /deep/.el-card__body {
                padding: 20px 0 20px 0;
            }

        }
        .payable-title {
            font-weight: 600;
            line-height: 21px;
            margin-bottom: 10px;
            color: $--color-text-secondary;
        }
        .payable-header-title {
            white-space: nowrap;
            font-weight: 500;
            font-size: 26px;
            line-height: 30px;
            margin-bottom: 10px;
        }
        .referral-network-title {
            margin: 0;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            padding-left: 10px;
            color: $--color-text-secondary;
        }
        .referral-second-table {
            .cell {
                padding-left: 0;
                font-size: 10px;
            }
        }
        .referral-network {
            .cell {
                font-size: 10px;
            }
        }
    }
</style>
