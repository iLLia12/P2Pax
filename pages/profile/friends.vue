<template>
    <el-row class="content-wrap friends-index-wrap">
        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="side-menu-wrap">
                    <SideMenu />
                </el-col>
                <el-col :xs="24" :sm="24" :md="{span:19, offset:1}" :lg="{span:19, offset:1}" :xl="{span:19, offset:1}">
                    <el-row class="wallets-inner-wrap">
                        <FriendsTabs />
                    </el-row>
                    <template v-if="friendsActiveTab === 'Dashboard'">
                        <el-row class="contacts-dashboard-tab">
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10" class="payable-block">
                                <MyReferralNetwork />
                                <ReferralLink />
                                <ReferralCode />
                            </el-col>
                            <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:13, offset:1}" class="second-table">
                                <ReferralTable />
                                <InviteMoreFriends />
                                <ShareSocial />
                            </el-col>
                        </el-row>
                    </template>
                    <Faq />
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>

    import SideMenu from "../../components/Profile/SideMenu";
    import MyReferralNetwork from "../../components/Profile/friends/myReferralNetwork";
    import ReferralTable from "../../components/Profile/friends/referralTable";
    import FriendsTabs from "../../components/Profile/friends/friendsTabs";
    import InviteMoreFriends from "../../components/Profile/friends/inviteMoreFriends";
    import ReferralLink from "../../components/Profile/friends/referralLink";
    import ReferralCode from "../../components/Profile/friends/referralCode";
    import ShareSocial from "../../components/Profile/friends/shareSocial";
    import Faq from "../../components/Profile/friends/faq";

    export default {
        name: "friends",
        components:{
            SideMenu,
            MyReferralNetwork,
            ReferralTable,
            FriendsTabs,
            InviteMoreFriends,
            ReferralLink,
            ReferralCode,
            Faq,
            ShareSocial
        },
    }
</script>

<style lang="scss">
    .friends-index-wrap {
        margin-top: 40px;
        .el-tabs__content {
            padding: 0;
        }
        .partner-img-mobile-wrap {
            display: none;
        }
    }
</style>
