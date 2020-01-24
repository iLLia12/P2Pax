<template>
    <el-tabs type="border-card" @tab-click="handleTabClick" :activeName="friendsActiveTab" class="friends-tabs">
        <el-tab-pane label="Dashboard" name="Dashboard">
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
        <el-tab-pane label="My referrals" name="My referrals">
            <el-row class="referrals-input-wrap">
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                    <p class="title">Users</p>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="{span:18, offset:2}" :xl="{span:16, offset:4}" class="date-picker-wrap">
                    <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="From">
                    </el-date-picker>
                    <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="To">
                    </el-date-picker>
                    <el-button type="primary">Find</el-button>
                </el-col>
            </el-row>
            <el-table
                class="referral-network"
                stripe
                empty-text="no result"
                :data="myReferralsDataTable"
                style="width: 100%">
                <el-table-column
                    prop="number"
                    width="40"
                    align="left"
                    label="№">
                </el-table-column>
                <el-table-column
                    prop="date"
                    width="110"
                    sortable
                    align="left"
                    label="	Date">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    width="120"
                    prop="introducer"
                    label="Introducer">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    width="120"
                    prop="username"
                    label="Username">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    prop="level"
                    width="100"
                    label="Level">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    prop="email"
                    width="130"
                    label="E-mail">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    prop="source"
                    width="100"
                    label="Source">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    prop="status"
                    width="100"
                    label="Status">
                </el-table-column>
                <el-table-column
                    sortable
                    align="left"
                    prop="total_invites"
                    label="Total Invites">
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="How it works" name="How it works">How it works</el-tab-pane>
        <el-tab-pane label="Competition" name="Competition">Competition</el-tab-pane>
    </el-tabs>
</template>

<script>

    import Faq from "../../../components/Profile/friends/faq";

    export default {
        name: "friendsTabs",
        components:{
            Faq
        },
        data: () => ({
            value2:'',
            pickerOptions: {
                shortcuts: [{
                    text: 'Last week',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: 'Last month',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: 'Last 3 months',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
        }),
        methods:{
            handleTabClick(a) {
                this.setFriendsActiveTab(a.name);
            }
        },
        mounted() {
            console.log(this.myReferralsDataTable)
        }
    }
</script>

<style lang="scss" scoped>

    @import "assets/scss/variables";

    .friends-tabs {
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
        .title-reff {
            font-size: 24px;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 20px;
        }
        .partner-img-mobile-wrap {
            display: none;
        }
        .title {
            font-weight: 600;
            font-size: 18px;
            padding-left: 10px;
            padding-top: 10px;
            color: #878d99;
        }
        .referrals-input-wrap {
            margin-bottom: 0;
            padding-top: 10px;
            .el-range-separator {
                width: 10%;
            }
        }
    }
</style>
