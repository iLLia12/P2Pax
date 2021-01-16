<template>
  <section class="faq-wrap mb10px">
    <p class="fw600 fs18px mb10px color-text-secondary">
      Frequently asked questions
    </p>
    <el-row class="input-wrap">
      <el-col
        class="faq-inner-wrap"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ span: 8, offset: 0 }"
        :xl="{ span: 8, offset: 0 }"
      >
        <el-card :body-style="{ borderRadius: '0' }">
          <p class="fw600 fs14px mb10px lh21px color-text-secondary">
            Type of Actions
          </p>
          <el-collapse v-model="activeNames" class="mb20px">
            <el-collapse-item title="Consistency" name="1">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Consistent with real life: in line with the process and logic of
                real life, and comply with languages and habits that the users
                are used to;
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col
        class="faq-inner-wrap"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ span: 8, offset: 0 }"
        :xl="{ span: 8, offset: 0 }"
      >
        <el-card :body-style="{ borderRadius: '0' }">
          <p class="fw600 fs14px mb10px lh21px color-text-secondary">
            Type of Invitations
          </p>
          <el-collapse v-model="activeNames" class="mb20px">
            <el-collapse-item title="Consistency" name="5">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="6">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="7">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="8">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col
        class="faq-inner-wrap"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ span: 8, offset: 0 }"
        :xl="{ span: 8, offset: 0 }"
      >
        <el-card :body-style="{ borderRadius: '0' }">
          <p class="fw600 fs14px mb10px lh21px color-text-secondary">
            Referral system
          </p>
          <el-collapse v-model="activeNames" class="mb20px">
            <el-collapse-item title="Consistency" name="9">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="10">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="11">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="12">
              <div
                class="faq-answer color-text-secondary style-oblique fs12px pl20px pr20px"
              >
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: "Faq",
  data: () => ({
    activeNames: [],
  }),
};
</script>

<style lang="scss">
.faq-wrap {
  .el-collapse-item__header {
    color: $--color-text-secondary !important;
    font-size: 12px;
    padding-left: 20px;
  }
}
</style>
