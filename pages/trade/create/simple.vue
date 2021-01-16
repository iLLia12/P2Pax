<template>
  <el-row class="content-wrap trade-simple-wrap mt40px">
    <DesktopForm />
    <MobileFormB />
  </el-row>
</template>

<script>
import MobileFormB from "../../../components/Trade/Simple/MobileFormB";
import DesktopForm from "../../../components/Trade/Simple/DesktopForm";
export default {
  name: "SimpleB",
  components: {
    MobileFormB,
    DesktopForm,
  },
};
</script>
