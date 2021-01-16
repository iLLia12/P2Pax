<template>
  <el-card
    class="invite-more-friends mt10px"
    :body-style="{ borderRadius: '0' }"
  >
    <p class="title m0 fw600 fs18px lh21px color-text-secondary">
      Invite via e-mail
    </p>
    <el-row class="mt10px">
      <el-col>
        <el-input v-model="input" placeholder="Friend`s email"></el-input>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "InviteMoreFriends",
  data: () => ({
    input: "",
  }),
};
</script>
