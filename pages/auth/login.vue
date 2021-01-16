<template>
  <div class="content-wrap">
    <el-row class="login-wrap">
      <el-col
        :xs="24"
        :sm="24"
        :md="{ offset: 7, span: 10 }"
        :lg="{ offset: 9, span: 6 }"
        :xl="{ offset: 9, span: 6 }"
        class="inner-container"
      >
        <el-card class="login-form-wrap">
          <h2 class="login_title">Login</h2>
          <el-form :label-position="labelPosition" :model="form">
            <el-form-item label="">
              <el-input v-model="form.name" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input
                v-model="form.region"
                placeholder="User name"
              ></el-input>
            </el-form-item>
            <el-form-item
              label=""
              label-position="left"
              class="terms-wrap"
              prop="type"
            >
              <el-checkbox
                v-model="form.accept"
                label=""
                name="type"
              ></el-checkbox>
              <span slot="" class="login-checkbox-text">Remember me</span>
            </el-form-item>
          </el-form>
          <el-row>
            <el-button class="login-form-btn" type="primary">Login</el-button>
          </el-row>
          <el-row>
            <p class="login-link-wrap">
              <span class="text-secondary">Are you not registered yet?</span>
              <nuxt-link class="link" to="registration">
                <span class="block text-align-center"> Registration </span>
              </nuxt-link>
            </p>
          </el-row>
          <el-row>
            <nuxt-link class="link" to="reset">
              <span class="block text-align-center">
                Forgot your password?
              </span>
            </nuxt-link>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      labelPosition: "right",
      form: {
        email: "",
        user_name: "",
        password: "",
        password_confirmation: "",
        referral_code: "",
        accept: "",
        not_citizen: "",
      },
    };
  },
};
</script>

<style lang="scss">
.login-wrap {
  height: 480px;
  display: flex;
  align-items: center;

  .term-link {
    color: $--color-blue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .asterisk-required {
    color: red;
  }
  .citizen-wrap,
  .terms-wrap {
    > .el-form-item__content {
      line-height: 20px;
    }
  }
  .login-checkbox-text {
    color: $--color-text-secondary;
  }
  .login_title {
    text-align: center;
    color: $--color-secondary;
    margin-bottom: 10px;
  }
  .login-form-btn {
    width: 100%;
  }
  .login-link-wrap {
    text-align: center;
  }
}
</style>
