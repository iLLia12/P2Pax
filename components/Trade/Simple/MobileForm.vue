<template>
  <el-col
    :xs="24"
    :sm="24"
    :md="24"
    :lg="{ offset: 4, span: 16 }"
    :xl="{ offset: 4, span: 16 }"
    class="inner-container trade-simple-mobile h100vh d-none"
  >
    <el-form ref="form" :model="form">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-card
            class="box-card"
            :body-style="{ borderRadius: '0', paddingTop: '0' }"
          >
            <el-collapse v-model="activeStep" accordion @change="handleChange">
              <el-collapse-item
                :title="$t('pages.simple_trade.currency')"
                :name="1"
              >
                <p class="fs18px text-align-center color-blue-light">
                  {{ $t("pages.simple_trade.to_sell") }}
                </p>
                <el-row class="mb5px">
                  <el-col
                    v-if="!!!form.currency_sell.length"
                    class="h128px overflow-auto"
                    :xs="{ span: 12, offset: 6 }"
                    :sm="{ span: 12, offset: 6 }"
                    :md="{ span: 12, offset: 6 }"
                    :lg="6"
                    :xl="6"
                  >
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_sell === 'BTC' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencySell('BTC')"
                        >BTC</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_sell === 'ETH' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencySell('ETH')"
                        >ETH</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_sell === 'AC' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencySell('AC')"
                        >AC</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_sell === 'USD' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencySell('USD')"
                        >USD</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_sell === 'RUB' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencySell('RUB')"
                        >RUB</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_sell === 'UAH' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencySell('UAH')"
                        >UAH</el-button
                      >
                    </div>
                  </el-col>
                  <el-col
                    v-if="!!form.currency_sell.length"
                    class="h128px overflow-auto mt10px"
                    :xs="12"
                    :sm="12"
                    :md="12"
                    :lg="6"
                    :xl="6"
                  >
                    <el-tag
                      closable
                      :disable-transitions="false"
                      @close="handleClearCurrencySellTag()"
                    >
                      {{ form.currency_sell }}
                    </el-tag>
                  </el-col>
                  <el-col
                    v-if="!!form.currency_sell.length"
                    class="h128px overflow-auto"
                    :xs="{ span: 11, offset: 1 }"
                    :sm="{ span: 11, offset: 1 }"
                    :md="{ span: 11, offset: 1 }"
                    :lg="{ span: 6, offset: 1 }"
                    :xl="{ span: 6, offset: 1 }"
                    style="padding-top: 10px"
                  >
                    <el-form-item label="">
                      <el-input
                        v-model="form.currency_sell_amount"
                        :placeholder="$t('pages.simple_trade.amount')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input
                        v-model="form.currency_sell_price"
                        :placeholder="$t('pages.simple_trade.price')"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <p class="fs18px text-align-center color-blue-light">
                  {{ $t("pages.simple_trade.to_buy") }}
                </p>
                <el-row class="mb5px">
                  <el-col
                    v-if="!!!form.currency_buy.length"
                    class="h128px overflow-auto"
                    :xs="{ span: 12, offset: 6 }"
                    :sm="{ span: 12, offset: 6 }"
                    :md="{ span: 12, offset: 6 }"
                    :lg="6"
                    :xl="6"
                  >
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_buy === 'BTC' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencyBuy('BTC')"
                        >BTC</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_buy === 'ETH' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencyBuy('ETH')"
                        >ETH</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_buy === 'AC' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencyBuy('AC')"
                        >AC</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_buy === 'USD' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencyBuy('USD')"
                        >USD</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_buy === 'RUB' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencyBuy('RUB')"
                        >RUB</el-button
                      >
                    </div>
                    <div class="d-flex justify-center pt10px">
                      <el-button
                        class="d-inline-block w70px"
                        :type="form.currency_buy === 'UAH' ? 'primary' : ''"
                        size="mini"
                        @click="selectCurrencyBuy('UAH')"
                        >UAH</el-button
                      >
                    </div>
                  </el-col>
                  <el-col
                    v-if="!!form.currency_buy.length"
                    class="h128px overflow-auto mt10px"
                    :xs="12"
                    :sm="12"
                    :md="12"
                    :lg="6"
                    :xl="6"
                  >
                    <el-tag
                      closable
                      :disable-transitions="false"
                      @close="handleClearCurrencyBuyTag()"
                    >
                      {{ form.currency_buy }}
                    </el-tag>
                  </el-col>
                  <el-col
                    v-if="!!form.currency_buy.length"
                    class="h128px overflow-auto"
                    :xs="{ span: 11, offset: 1 }"
                    :sm="{ span: 11, offset: 1 }"
                    :md="{ span: 11, offset: 1 }"
                    :lg="{ span: 6, offset: 1 }"
                    :xl="{ span: 6, offset: 1 }"
                    style="padding-top: 10px"
                  >
                    <el-form-item label="">
                      <el-input
                        v-model="form.currency_buy_amount"
                        :placeholder="$t('pages.simple_trade.amount')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input
                        v-model="form.currency_buy_price"
                        :placeholder="$t('pages.simple_trade.price')"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="mt5px">
                  <el-button type="success" @click="changeStep(2)">{{
                    $t("pages.simple_trade.next")
                  }}</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                :title="$t('pages.simple_trade.exchange_rate_to_sell')"
                :name="2"
              >
                <el-row>
                  <el-col
                    :xs="24"
                    :sm="{ span: 18, offset: 4 }"
                    :md="{ span: 18, offset: 4 }"
                    :lg="{ span: 18, offset: 4 }"
                    :xl="{ span: 18, offset: 4 }"
                  >
                    <el-form-item label="">
                      <el-checkbox v-model="form.manual_checkbox"></el-checkbox>
                      <span>{{ $t("pages.simple_trade.set_manually") }}</span>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input
                        v-model="form.manual_value"
                        size="mini"
                      ></el-input>
                    </el-form-item>
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
                    <el-form-item label="">
                      <el-checkbox v-model="form.market_checkbox"></el-checkbox>
                      <span
                        >{{ $t("pages.simple_trade.count_amount") }} +
                      </span>
                    </el-form-item>
                    <el-form-item label="" class="profit-input">
                      <el-input
                        v-model="form.market_value"
                        size="mini"
                      ></el-input>
                      <div class="w100px ml5px">
                        % {{ $t("pages.simple_trade.profit") }}
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="mt5px">
                  <el-button @click="changeStep(1)">{{
                    $t("pages.simple_trade.back")
                  }}</el-button>
                  <el-button type="success" @click="changeStep(3)">{{
                    $t("pages.simple_trade.next")
                  }}</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                :title="$t('pages.simple_trade.where_to_get')"
                :name="3"
              >
                <el-row class="mb5px">
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
                <el-row class="mb5px">
                  <el-col
                    :xs="24"
                    :sm="{ span: 18, offset: 4 }"
                    :md="{ span: 18, offset: 4 }"
                    :lg="{ span: 18, offset: 4 }"
                    :xl="{ span: 18, offset: 4 }"
                  >
                    <el-form-item label="">
                      <el-checkbox v-model="form.cash"></el-checkbox>
                      <span>{{
                        $t("pages.simple_trade.cash_upon_meeting")
                      }}</span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="mb5px">
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
                <el-row type="flex" justify="center" class="mt5px">
                  <el-button @click="changeStep(2)">{{
                    $t("pages.simple_trade.back")
                  }}</el-button>
                  <el-button type="success" @click="changeStep(4)">{{
                    $t("pages.simple_trade.next")
                  }}</el-button>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                :title="$t('pages.simple_trade.filter_buyers')"
                :name="4"
              >
                <p class="fs18px text-align-center color-blue-light">
                  {{ $t("pages.simple_trade.show_only_offers_with") }}
                </p>
                <el-row class="mt10px">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item
                      :label="$t('pages.simple_trade.minimum_transaction')"
                      class="form-item-wrap"
                    >
                      <el-input
                        v-model="form.input4"
                        size="mini"
                        placeholder=""
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item
                      :label="$t('pages.simple_trade.maximum_transaction')"
                      class="form-item-wrap"
                    >
                      <el-input
                        v-model="form.input5"
                        size="mini"
                        placeholder=""
                      >
                      </el-input>
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
                <el-row type="flex" justify="center" class="mt5px">
                  <el-button @click="changeStep(3)">{{
                    $t("pages.simple_trade.back")
                  }}</el-button>
                  <el-button type="success">{{
                    $t("pages.simple_trade.save")
                  }}</el-button>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
      </el-row>
    </el-form>
  </el-col>
</template>

<script>
export default {
  name: "MobileForm",
  data: () => ({
    activeStep: 1,
    activeNames: [1, 2],
    step: 2,
    form: {
      currency_sell_amount: "",
      currency_sell_price: 8500,
      currency_sell: "",
      currency_buy: "",
      manual_checkbox: "",
      manual_value: "",
      market_checkbox: "",
      market_value: "",
      bank_card: "",
      cash: "",
      other: "",
      amount: "",
    },
  }),
  computed: {
    isNextButtonDisabled() {
      return !(this.form.currency_sell.length && this.form.currency_buy.length);
    },
  },
  watch: {
    "form.currency_sell_amount": function (val) {
      if (val) {
        this.$set(this.form, "currency_buy_amount", 8500);
      } else {
        this.$set(this.form, "currency_buy_amount", "");
      }
    },
  },
  methods: {
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
      this.activeStep = step;
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

<style lang="scss">
.trade-simple-mobile {
  .el-collapse {
    border: none;
  }
  .el-collapse-item__header {
    font-size: 15px;
    text-align: center;
    color: $--color-grey-light;
  }
  .profit-input {
    .el-form-item__content {
      display: flex;
    }
  }
  .form-item-wrap {
    .el-form-item__content {
      width: 15%;
    }
    .el-input__inner {
      padding: 0 5px;
    }
  }
  .el-form-item__label {
    display: inline;
  }
}
</style>
