<template>
  <el-card class="box-card referral-table" :body-style="{ borderRadius: '0' }">
    <el-table :data="tableData" class="referral-second-table w100">
      <el-table-column prop="number" align="center" label="№" width="40">
      </el-table-column>
      <el-table-column
        prop="registration_type"
        label="Registration type"
        align="center"
        width="110"
      >
      </el-table-column>
      <el-table-column
        prop="number_of_referrals"
        label="Number of referrals"
        align="center"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="invited_by_me"
        width="110"
        align="center"
        label="Invited by me"
      >
      </el-table-column>
      <el-table-column
        prop="invited_by_referrals"
        align="center"
        width="110"
        label="Invited by Referrals"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "ReferralTable",
  data: () => ({
    tableData: [
      {
        number: 1,
        registration_type: "Direct invite (link)",
        number_of_referrals: 0,
        invited_by_me: 0,
        invited_by_referrals: 0,
      },
      {
        number: 1,
        registration_type: "Direct invite (link)",
        number_of_referrals: 0,
        invited_by_me: 0,
        invited_by_referrals: 0,
      },
      {
        number: 1,
        registration_type: "Direct invite (link)",
        number_of_referrals: 0,
        invited_by_me: 0,
        invited_by_referrals: 0,
      },
      {
        number: 1,
        registration_type: "Direct invite (link)",
        number_of_referrals: 0,
        invited_by_me: 0,
        invited_by_referrals: 0,
      },
      {
        number: 1,
        registration_type: "Direct invite (link)",
        number_of_referrals: 0,
        invited_by_me: 0,
        invited_by_referrals: 0,
      },
      {
        number: 1,
        registration_type: "Direct invite (link)",
        number_of_referrals: 0,
        invited_by_me: 0,
        invited_by_referrals: 0,
      },
    ],
  }),
};
</script>

<style lang="scss">
.referral-second-table {
  .cell {
    padding-left: 0;
    font-size: 10px;
  }
}
</style>
