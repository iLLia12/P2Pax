<template>
  <el-col
    :xs="24"
    :sm="24"
    :md="24"
    :lg="{ offset: 4, span: 16 }"
    :xl="{ offset: 4, span: 16 }"
    class="inner-container trade-simple-mobile d-none"
  >
    <el-form ref="form" :model="form">
      <el-row type="flex" justify="center">
        <el-col v-if="step === 1" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h5 class="fs20px text-align-center color-grey-light">
            {{ $t("pages.simple_trade.order_to_buy_sell_cryptocurrency") }}
          </h5>
          <el-card
            class="box-card"
            :body-style="{
              borderRadius: '0',
              paddingTop: '15px',
              paddingBottom: '15px',
            }"
          >
            <div>
              <el-alert type="error" :closable="false">
                <template slot="title">
                  <span>{{ $t("pages.simple_trade.currency_to_sell") }}</span>
                </template>
              </el-alert>
              <el-row>
                <el-col class="pt10px">
                  <el-row type="flex" justify="space-between">
                    <el-col
                      :xs="{ span: 4, offset: 10 }"
                      :sm="{ span: 4, offset: 10 }"
                      :md="{ span: 4, offset: 10 }"
                      :lg="{ span: 4, offset: 10 }"
                      :xl="{ span: 4, offset: 10 }"
                      class="d-flex justify-center"
                    >
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          <el-button
                            icon="el-icon-bottom"
                            size="mini"
                            :type="form.currency_sell ? 'danger' : 'primary'"
                            plain
                          >
                            {{
                              form.currency_sell
                                ? form.currency_sell
                                : "Select Currency to Sell"
                            }}
                          </el-button>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_sell !== 'BTC' ? 'info' : 'danger'
                              "
                              :plain="form.currency_sell !== 'BTC'"
                              size="mini"
                              round
                              @click="selectCurrencySell('BTC')"
                              >BTC</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_sell !== 'AC' ? 'info' : 'danger'
                              "
                              :plain="form.currency_sell !== 'AC'"
                              size="mini"
                              round
                              @click="selectCurrencySell('AC')"
                              >AC</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_sell !== 'USD' ? 'info' : 'danger'
                              "
                              :plain="form.currency_sell !== 'USD'"
                              size="mini"
                              round
                              @click="selectCurrencySell('USD')"
                              >USD</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_sell !== 'ETH' ? 'info' : 'danger'
                              "
                              :plain="form.currency_sell !== 'ETH'"
                              size="mini"
                              round
                              @click="selectCurrencySell('ETH')"
                              >ETH</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_sell !== 'RUB' ? 'info' : 'danger'
                              "
                              :plain="form.currency_sell !== 'RUB'"
                              size="mini"
                              round
                              @click="selectCurrencySell('RUB')"
                              >RUB</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_sell !== 'UAH' ? 'info' : 'danger'
                              "
                              :plain="form.currency_sell !== 'UAH'"
                              size="mini"
                              round
                              @click="selectCurrencySell('UAH')"
                              >UAH</el-button
                            >
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="">
                        <el-input
                          ref="sell_amount"
                          v-model="form.currency_sell_amount"
                          :placeholder="$t('pages.simple_trade.amount')"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="">
                        <el-input
                          v-model="form.currency_sell_price"
                          :placeholder="$t('pages.simple_trade.price')"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <el-divider
              ><div class="icon icon_switch w40px h40px"></div
            ></el-divider>
            <div class="pt10px">
              <el-alert
                :title="$t('pages.simple_trade.currency_to_buy')"
                type="success"
                :closable="false"
              >
              </el-alert>
              <el-row>
                <el-col class="pt10px">
                  <el-row type="flex" justify="space-between">
                    <el-col
                      :xs="{ span: 4, offset: 10 }"
                      :sm="{ span: 4, offset: 10 }"
                      :md="{ span: 4, offset: 10 }"
                      :lg="{ span: 4, offset: 10 }"
                      :xl="{ span: 4, offset: 10 }"
                      style="display: flex; justify-content: center"
                    >
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          <el-button
                            icon="el-icon-bottom"
                            size="mini"
                            :type="form.currency_buy ? 'success' : 'primary'"
                            plain
                          >
                            {{
                              form.currency_buy
                                ? form.currency_buy
                                : "Select Currency to Buy"
                            }}
                          </el-button>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_buy !== 'BTC' ? 'info' : 'success'
                              "
                              :plain="form.currency_buy !== 'BTC'"
                              size="mini"
                              round
                              @click="selectCurrencyBuy('BTC')"
                              >BTC</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_buy !== 'AC' ? 'info' : 'success'
                              "
                              :plain="form.currency_buy !== 'AC'"
                              size="mini"
                              round
                              @click="selectCurrencyBuy('AC')"
                              >AC</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_buy !== 'USD' ? 'info' : 'success'
                              "
                              :plain="form.currency_buy !== 'USD'"
                              size="mini"
                              round
                              @click="selectCurrencyBuy('USD')"
                              >USD</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_buy !== 'ETH' ? 'info' : 'success'
                              "
                              :plain="form.currency_buy !== 'ETH'"
                              size="mini"
                              round
                              @click="selectCurrencyBuy('ETH')"
                              >ETH</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_buy !== 'RUB' ? 'info' : 'success'
                              "
                              :plain="form.currency_buy !== 'RUB'"
                              size="mini"
                              round
                              @click="selectCurrencyBuy('RUB')"
                              >RUB</el-button
                            >
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <el-button
                              :type="
                                form.currency_buy !== 'UAH' ? 'info' : 'success'
                              "
                              :plain="form.currency_buy !== 'UAH'"
                              size="mini"
                              round
                              @click="selectCurrencyBuy('UAH')"
                              >UAH</el-button
                            >
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-col>
                  </el-row>
                  <el-row type="flex" justify="center">
                    <el-col :span="2">
                      <div class="d-inline-block">
                        {{ form.currency_buy_price }}
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center" class="mt10px">
                <el-button type="success" @click="changeStep(2)">{{
                  $t("pages.simple_trade.create_order")
                }}</el-button>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col v-if="step === 2" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h5 class="title">{{ $t("pages.simple_trade.step_two") }}</h5>
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <p class="fs18px text-align-center color-blue-light">
              {{ $t("pages.simple_trade.exchange_rate_to_sell") }}
            </p>
            <el-row>
              <el-col
                :xs="24"
                :sm="{ span: 18, offset: 4 }"
                :md="{ span: 18, offset: 4 }"
                :lg="{ span: 18, offset: 4 }"
                :xl="{ span: 18, offset: 4 }"
              >
                <el-form :inline="true" :model="form" class="demo-form-inline">
                  <el-form-item label="">
                    <el-checkbox v-model="form.manual_checkbox"></el-checkbox>
                    <span>{{ $t("pages.simple_trade.set_manually") }}</span>
                  </el-form-item>
                  <el-form-item label="">
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
                  <el-form-item label="">
                    <el-checkbox v-model="form.market_checkbox"></el-checkbox>
                    <span>{{ $t("pages.simple_trade.count_amount") }} + </span>
                  </el-form-item>
                  <el-form-item label="" class="profit-input">
                    <el-input v-model="form.market_value"></el-input>
                    <div class="w100px ml5px">
                      % {{ $t("pages.simple_trade.profit") }}
                    </div>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="mt10px">
              <el-button @click="changeStep(1)">{{
                $t("pages.simple_trade.back")
              }}</el-button>
              <el-button type="success" @click="changeStep(3)">{{
                $t("pages.simple_trade.next")
              }}</el-button>
            </el-row>
          </el-card>
        </el-col>
        <el-col v-if="step === 3" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h5 class="title">{{ $t("pages.simple_trade.step_three") }}</h5>
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <p class="fs18px text-align-center color-blue-light">
                {{ $t("pages.simple_trade.where_to_get") }}
              </p>
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
                    <span>{{
                      $t("pages.simple_trade.cash_upon_meeting")
                    }}</span>
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
            </el-form>
            <el-row type="flex" justify="center" class="mt10px">
              <el-button @click="changeStep(2)">{{
                $t("pages.simple_trade.back")
              }}</el-button>
              <el-button type="success" @click="changeStep(4)">{{
                $t("pages.simple_trade.next")
              }}</el-button>
            </el-row>
          </el-card>
        </el-col>
        <el-col v-if="step === 4" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h5 class="title">{{ $t("pages.simple_trade.step_four") }}</h5>
          <el-card class="box-card" :body-style="{ borderRadius: '0' }">
            <p class="text-align-center">
              {{ $t("pages.simple_trade.filter_buyers") }}
            </p>
            <p class="fs18px text-align-center color-blue-light">
              {{ $t("pages.simple_trade.show_only_offers_with") }}
            </p>
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <el-row style="margin-top: 30px">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item
                    :label="$t('pages.simple_trade.minimum_transaction')"
                    class="form-item-wrap"
                  >
                    <el-input v-model="form.input4" size="mini" placeholder="">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item
                    :label="$t('pages.simple_trade.maximum_transaction')"
                    class="form-item-wrap"
                  >
                    <el-input v-model="form.input5" size="mini" placeholder="">
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
            </el-form>
            <el-row type="flex" justify="center" class="mt10px">
              <el-button @click="changeStep(3)">{{
                $t("pages.simple_trade.back")
              }}</el-button>
              <el-button type="success">{{
                $t("pages.simple_trade.save")
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
  name: "MobileFormV2",
  data: () => ({
    activeNames: [1, 2],
    step: 1,
    form: {
      currency_sell_amount: "",
      currency_sell_price: "",
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
      this.$refs.sell_amount.$el.getElementsByTagName("input")[0].focus();
      this.$set(this.form, "currency_sell_price", "8500");
    },
    selectCurrencyBuy(currency) {
      this.$set(this.form, "currency_buy", currency);
      this.$set(this.form, "currency_buy_price", "8500");
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

<style lang="scss">
.trade-simple-mobile {
  .el-alert {
    display: flex;
    justify-content: center;
  }
  .el-alert__title {
    font-size: 22px;
  }
  .el-form-item__label {
    display: inline;
  }
  .el-collapse-item__content {
    padding-bottom: 10px;
  }
  .el-collapse-item__wrap {
    border-bottom: none;
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
}
</style>
