<template>
  <el-card
    class="referral-link-wrap mt10px"
    :body-style="{ borderRadius: '0' }"
  >
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <p class="m0 fw600 fs18px lh21px color-text-secondary">Referral link</p>
      </el-col>
      <el-col
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
        class="copy-icon-wrap d-flex justify-end"
      >
        <i class="el-icon-document-copy" @click="copyToClipboard"></i>
      </el-col>
    </el-row>
    <el-input
      id="referralLink"
      v-model="referralLinkInput"
      class="text-overflow-ellipsis overflow-hidden w100 white-space-nowrap color-text-secondary"
      placeholder="Please input"
      :disabled="true"
    >
    </el-input>
  </el-card>
</template>

<script>
export default {
  name: "ReferralLink",
  data: () => ({
    referralLinkInput:
      "https://p2pax.com/?utm_source=71a2fd54f05e2328a56a54c13b3bf2a31a2fd54f05e2328a56a54c13b3bf2a3",
  }),
  methods: {
    copyToClipboard() {
      let copyText = document.getElementById("referralLink");
      copyText.select();
      document.execCommand("copy");
      this.$message({
        message: "Copied to clipboard",
      });
    },
  },
};
</script>

<style lang="scss">
.referral-link-wrap {
  .el-icon-document-copy {
    cursor: pointer;
  }
}
</style>
