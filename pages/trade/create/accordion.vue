<template>
  <el-row class="content-wrap trade-simple-wrap">
    <DesktopForm />
    <MobileForm />
  </el-row>
</template>

<script>
import MobileForm from "../../../components/Trade/Simple/MobileForm";
import DesktopForm from "../../../components/Trade/Simple/DesktopForm";
export default {
  name: "Simple",
  components: {
    MobileForm,
    DesktopForm,
  },
};
</script>

<style lang="scss">
.trade-simple-wrap {
  margin-top: 40px;
}
</style>
