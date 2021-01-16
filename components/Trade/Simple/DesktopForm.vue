<template>
  <el-col
    :xs="24"
    :sm="24"
    :md="24"
    :lg="{ offset: 4, span: 16 }"
    :xl="{ offset: 4, span: 16 }"
    class="inner-container trade-simple-desktop h70vh"
  >
    <el-form ref="form" :model="form">
      <el-row>
        <el-col>
          <el-steps :active="activeStep" finish-status="success">
            <el-step title="Step 1" description="Select currency"></el-step>
            <el-step title="Step 2" description="Select currency"></el-step>
            <el-step title="Step 3"></el-step>
            <el-step title="Step 4"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <el-row v-if="activeStep === 0">
        <el-row>
          <el-col
            :xs="{ span: 12, offset: 6 }"
            :sm="{ span: 12, offset: 6 }"
            :md="{ span: 12, offset: 6 }"
            :lg="{ span: 12, offset: 6 }"
            :xl="{ span: 12, offset: 6 }"
          >
            <el-card
              class="box-card"
              :body-style="{
                borderRadius: '0',
                paddingTop: '15px',
                paddingBottom: '5px',
              }"
            >
              <el-row>
                <h3 class="title text-align-center fs22px text-secondary">
                  {{ $t("pages.simple_trade.currency_to_sell") }}
                </h3>
                <el-col
                  v-if="!!!form.currency_sell.length"
                  class="d-flex justify-center pt10px"
                >
                  <el-button
                    :type="form.currency_sell === 'BTC' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencySell('BTC')"
                    >BTC</el-button
                  >
                  <el-button
                    :type="form.currency_sell === 'ETH' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencySell('ETH')"
                    >ETH</el-button
                  >
                  <el-button
                    :type="form.currency_sell === 'AC' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencySell('AC')"
                    >AC</el-button
                  >
                  <el-button
                    :type="form.currency_sell === 'USD' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencySell('USD')"
                    >USD</el-button
                  >
                  <el-button
                    :type="form.currency_sell === 'RUB' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencySell('RUB')"
                    >RUB</el-button
                  >
                  <el-button
                    :type="form.currency_sell === 'UAH' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencySell('UAH')"
                    >UAH</el-button
                  >
                </el-col>
                <el-col
                  v-if="!!form.currency_sell.length"
                  class="d-flex justify-center pt10px"
                >
                  <el-tag
                    class="d-block"
                    closable
                    :disable-transitions="false"
                    @close="handleClearCurrencySellTag()"
                  >
                    {{ form.currency_sell }}
                  </el-tag>
                </el-col>
                <el-col v-if="!!form.currency_sell.length">
                  <el-form-item label="" class="mt10px w100px mr-auto ml-auto">
                    <el-input
                      v-model="form.currency_sell_amount"
                      :placeholder="$t('pages.simple_trade.amount')"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="" class="mt10px w100px mr-auto ml-auto">
                    <el-input
                      v-model="form.currency_sell_price"
                      :placeholder="$t('pages.simple_trade.price')"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <h3 class="text-align-center fs22px text-secondary">
                  {{ $t("pages.simple_trade.currency_to_buy") }}
                </h3>
                <el-col
                  v-if="!!!form.currency_buy.length"
                  class="d-flex justify-center pt10px"
                >
                  <el-button
                    :type="form.currency_buy === 'BTC' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencyBuy('BTC')"
                    >BTC</el-button
                  >
                  <el-button
                    :type="form.currency_buy === 'ETH' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencyBuy('ETH')"
                    >ETH</el-button
                  >
                  <el-button
                    :type="form.currency_buy === 'AC' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencyBuy('AC')"
                    >AC</el-button
                  >
                  <el-button
                    :type="form.currency_buy === 'USD' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencyBuy('USD')"
                    >USD</el-button
                  >
                  <el-button
                    :type="form.currency_buy === 'RUB' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencyBuy('RUB')"
                    >RUB</el-button
                  >
                  <el-button
                    :type="form.currency_buy === 'UAH' ? 'primary' : ''"
                    size="mini"
                    class="w70px mb5px"
                    @click="selectCurrencyBuy('UAH')"
                    >UAH</el-button
                  >
                </el-col>
                <el-col
                  v-if="!!form.currency_buy.length"
                  class="d-flex justify-center pt10px"
                >
                  <el-tag
                    class="d-block"
                    closable
                    :disable-transitions="false"
                    @close="handleClearCurrencyBuyTag()"
                  >
                    {{ form.currency_buy }}
                  </el-tag>
                </el-col>
                <el-col v-if="!!form.currency_buy.length">
                  <el-form-item class="mt10px w100px mr-auto ml-auto">
                    <el-input
                      v-model="form.currency_buy_amount"
                      :placeholder="$t('pages.simple_trade.amount')"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="mt10px w100px mr-auto ml-auto">
                    <el-input
                      v-model="form.currency_buy_price"
                      :placeholder="$t('pages.simple_trade.price')"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <div>
            <el-button type="success" @click="nextStep">{{
              $t("pages.simple_trade.next")
            }}</el-button>
          </div>
        </el-row>
      </el-row>
      <el-row v-if="activeStep === 1">
        <el-col
          :xs="{ span: 12, offset: 6 }"
          :sm="{ span: 12, offset: 6 }"
          :md="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :xl="{ span: 12, offset: 6 }"
        >
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <h3 class="text-align-center fs22px text-secondary">
              {{ $t("pages.simple_trade.exchange_rate_to_sell") }}
            </h3>
            <el-row class="mt-15">
              <el-col
                :xs="24"
                :sm="{ span: 18, offset: 4 }"
                :md="{ span: 18, offset: 4 }"
                :lg="{ span: 18, offset: 4 }"
                :xl="{ span: 18, offset: 4 }"
              >
                <el-form :inline="true" :model="form" class="demo-form-inline">
                  <el-form-item>
                    <el-checkbox v-model="form.manual_checkbox"></el-checkbox>
                    <span>{{ $t("pages.simple_trade.set_manually") }}</span>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="form.manual_value"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row>
              <el-col
                :xs="24"
                :sm="{ span: 18, offset: 4 }"
                :md="{ span: 18, offset: 4 }"
                :lg="{ span: 18, offset: 4 }"
                :xl="{ span: 18, offset: 4 }"
              >
                <el-form
                  :inline="true"
                  :model="form"
                  class="demo-form-inline"
                  label-position="right"
                >
                  <el-form-item>
                    <el-checkbox v-model="form.market_checkbox"></el-checkbox>
                    <span>{{ $t("pages.simple_trade.count_amount") }} + </span>
                  </el-form-item>
                  <el-form-item label="" class="d-block">
                    <el-input v-model="form.market_value"></el-input>
                    <div class="input-label-right">
                      % {{ $t("pages.simple_trade.profit") }}
                    </div>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="btn-wrap">
              <el-button @click="prevStep">{{
                $t("pages.simple_trade.back")
              }}</el-button>
              <el-button type="success" @click="nextStep">{{
                $t("pages.simple_trade.next")
              }}</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row v-if="activeStep === 2">
        <el-col
          :xs="{ span: 12, offset: 6 }"
          :sm="{ span: 12, offset: 6 }"
          :md="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :xl="{ span: 12, offset: 6 }"
        >
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <h3 class="text-align-center fs22px text-secondary">
              {{ $t("pages.simple_trade.where_to_get") }}
            </h3>
            <el-row style="margin-top: 30px">
              <el-col
                :xs="24"
                :sm="{ span: 18, offset: 4 }"
                :md="{ span: 18, offset: 4 }"
                :lg="{ span: 18, offset: 4 }"
                :xl="{ span: 18, offset: 4 }"
              >
                <el-form-item label="">
                  <el-checkbox v-model="form.bank_card"></el-checkbox>
                  <span>{{ $t("pages.simple_trade.bank_card") }}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :xs="24"
                :sm="{ span: 18, offset: 4 }"
                :md="{ span: 18, offset: 4 }"
                :lg="{ span: 18, offset: 4 }"
                :xl="{ span: 18, offset: 4 }"
              >
                <el-form-item label="">
                  <el-checkbox v-model="form.cash"></el-checkbox>
                  <span>{{ $t("pages.simple_trade.cash_upon_meeting") }}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :xs="24"
                :sm="{ span: 18, offset: 4 }"
                :md="{ span: 18, offset: 4 }"
                :lg="{ span: 18, offset: 4 }"
                :xl="{ span: 18, offset: 4 }"
              >
                <el-form-item label="">
                  <el-checkbox v-model="form.other"></el-checkbox>
                  <span>{{ $t("pages.simple_trade.other") }}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="btn-wrap">
              <el-button @click="prevStep">{{
                $t("pages.simple_trade.back")
              }}</el-button>
              <el-button type="success" @click="nextStep">{{
                $t("pages.simple_trade.next")
              }}</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row v-if="activeStep === 3">
        <el-col
          :xs="{ span: 12, offset: 6 }"
          :sm="{ span: 12, offset: 6 }"
          :md="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :xl="{ span: 12, offset: 6 }"
        >
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <p class="text-align-center fs22px text-secondary">
              {{ $t("pages.simple_trade.filter_buyers") }}
            </p>
            <p
              class="title-inner mb10px fs18px text-align-center color-blue-light"
            >
              {{ $t("pages.simple_trade.show_only_offers_with") }}
            </p>
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <el-row class="mb30px">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item
                    :label="$t('pages.simple_trade.minimum_transaction')"
                    class="form-item-wrap"
                  >
                    <el-input v-model="form.input4" size="mini"> </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item
                    :label="$t('pages.simple_trade.maximum_transaction')"
                    class="form-item-wrap"
                  >
                    <el-input v-model="form.input5" size="mini"> </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="">
                    <el-checkbox v-model="form.input7"></el-checkbox>
                    <span>{{
                      $t("pages.simple_trade.verified_users_only")
                    }}</span>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="">
                    <el-checkbox v-model="form.input8"></el-checkbox>
                    <span>{{
                      $t("pages.simple_trade.authenticated_users_only")
                    }}</span>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="">
                    <el-checkbox v-model="form.input9"></el-checkbox>
                    <span>{{
                      $t("pages.simple_trade.check_user_before_the_deal")
                    }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <el-row type="flex" justify="center" class="btn-wrap">
              <el-button @click="prevStep">{{
                $t("pages.simple_trade.back")
              }}</el-button>
              <el-button type="success" @click="nextStep">{{
                $t("pages.simple_trade.next")
              }}</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row v-if="activeStep === 4">
        <el-col
          :xs="{ span: 12, offset: 6 }"
          :sm="{ span: 12, offset: 6 }"
          :md="{ span: 12, offset: 6 }"
          :lg="{ span: 12, offset: 6 }"
          :xl="{ span: 12, offset: 6 }"
        >
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <el-row type="flex" justify="center">
              <el-button
                style="border-radius: 50% !important"
                type="success"
                icon="el-icon-check"
                circle
              ></el-button>
            </el-row>
            <el-row type="flex" justify="center" class="btn-wrap">
              <el-button @click="prevStep">{{
                $t("pages.simple_trade.back")
              }}</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-form>
  </el-col>
</template>
<script>
export default {
  name: "DesktopForm",
  data: () => ({
    activeStep: 0,
    form: {
      currency_sell_amount: "",
      currency_sell_price: 8500,
      currency_buy_amount: "",
      currency_buy_price: "",
      currency_sell: "",
      currency_buy: "",
      manual_checkbox: "",
      manual_value: "",
      market_checkbox: "",
      market_value: "",
      bank_card: "",
      cash: "",
      other: "",
    },
  }),
  computed: {
    isNextButtonDisabled() {
      return !(this.form.currency_sell.length && this.form.currency_buy.length);
    },
  },
  watch: {
    "form.currency_sell_amount": function (val) {
      if (val) this.$set(this.form, "currency_buy_amount", 8500);
      else this.$set(this.form, "currency_buy_amount", "");
    },
    form: {
      handler(a) {
        this.setTradeSimpleForm({
          ...a,
        });
      },
      deep: true,
    },
  },
  methods: {
    nextStep() {
      this.activeStep++;
    },
    prevStep() {
      this.activeStep--;
    },
    handleChange(val) {
      console.log(val);
    },
    handleCurrencyBuyClick(val) {
      console.log(val.target);
    },
    selectCurrencySell(currency) {
      this.$set(this.form, "currency_sell", currency);
    },
    selectCurrencyBuy(currency) {
      this.$set(this.form, "currency_buy", currency);
    },
    changeStep(step) {
      this.step = step;
    },
    handleClearCurrencySellTag() {
      this.$set(this.form, "currency_sell", "");
    },
    handleClearCurrencyBuyTag() {
      this.$set(this.form, "currency_buy", "");
    },
  },
};
</script>
