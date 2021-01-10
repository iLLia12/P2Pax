<template>
    <section class="my-referral">
        <p class="payable-title">Payable Rewords</p>
        <el-card class="box-card" :body-style="{ borderRadius:'0'}">
            <el-row style="padding:0 10px">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" class="payable-header-title">0.00 USD</el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="15">
                    <el-button type="primary">Withdraw</el-button>
                    <el-button type="primary">Transfer</el-button>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="table-wrap">
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
    </section>
</template>

<script>
    export default {
        name: "payableRewards",
    }
</script>

<style lang="scss" scoped>
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
        color: $--color-text-secondary;
    }
    .table-wrap {
        margin-top: 20px;
    }
    .referral-network {
        /deep/.cell {
            font-size: 10px;
        }
    }

</style>
