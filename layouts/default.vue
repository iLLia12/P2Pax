<template>
  <transition name="el-fade-in-linear">
    <div v-show="loaded" class="layout-wrap">
      <Header />
      <el-main class="p0">
        <nuxt />
      </el-main>
      <FooterComponent />
    </div>
  </transition>
</template>

<script>
import FooterComponent from "../components/Footer";
import Header from "../components/Header";
export default {
  components: {
    FooterComponent,
    Header,
  },
  data: () => ({
    loaded: false,
  }),
  mounted() {
    this.loaded = true;
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  padding: 60px 0 0 0;
}
</style>
