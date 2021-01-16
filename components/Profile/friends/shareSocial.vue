<template>
  <el-card class="mt10px" :body-style="{ borderRadius: '0' }">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <p class="m0 fw600 fs18px lh21px color-text-secondary">
          Share in your social
        </p>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="icons-wrap mt10px d-flex"
      >
        <div
          class="icon w40px h40px d-inline-block mr10px pointer icon_facebook_a"
        ></div>
        <div
          class="icon w40px h40px d-inline-block mr10px pointer icon_twitter_a"
        ></div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "ShareSocial",
};
</script>
