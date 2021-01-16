<template>
  <section class="my-referral">
    <p class="fw600 lh21px mb10px color-text-secondary">Payable Rewords</p>
    <el-card class="box-card" :body-style="{ borderRadius: '0' }">
      <el-row class="pt0 pb0 pt10px pl10px d-flex justify-between">
        <el-col class="white-space-nowrap fw500 fs26px lh30px mb10px"
          >0.00 USD</el-col
        >
        <el-col class="d-flex">
          <el-button type="primary">Withdraw</el-button>
          <el-button type="primary">Transfer</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="mt20px">
        <p class="m0 fw600 fs18px lh21px color-text-secondary">
          My Referral Network
        </p>
        <el-table
          class="referral-network w100"
          empty-text="no result"
          :data="payableRewordsTable"
        >
          <el-table-column prop="level" width="80" align="left" label="Level">
          </el-table-column>
          <el-table-column
            prop="percent"
            width="80"
            align="left"
            label="Percent"
          >
          </el-table-column>
          <el-table-column
            align="left"
            prop="referrals"
            label="Number of referrals"
          >
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </section>
</template>

<script>
export default {
  name: "PayableRewards",
};
</script>

<style lang="scss">
.my-referral {
  .referral-network {
    .cell {
      font-size: 10px;
    }
  }
}
</style>
