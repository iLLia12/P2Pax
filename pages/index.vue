<template>
  <div class="pb20px">
    <el-row class="bg-primary h380px">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ offset: 4, span: 16 }"
        :xl="{ offset: 4, span: 16 }"
        class="inner-container"
      >
        <el-row class="d-flex justify-between">
          <div
            class="banner-text-wrap h380px d-flex justify-center align-items-center"
          >
            <div class="banner-text-inner-wrap">
              <div class="fw-bold fs40px lh-normal color-white mb28px">
                {{ $t("pages.main.banner.buy_sell") }}
                {{ $t("pages.main.banner.near") }}
              </div>
              <div class="fs20px color-white mb30px">
                <span>{{ $t("pages.main.banner.locations") }}</span>
              </div>
              <el-row>
                <el-button
                  class="banner-btn btn-shadow p-relative zi2 w100 h60px fs22px fw800"
                  type="success"
                  >{{ $t("pages.main.banner.sign_up") }}</el-button
                >
              </el-row>
            </div>
          </div>
          <div class="banner-img-wrap w60 h380px d-flex align-items-center">
            <img
              class="image-banner w100 max-h400px"
              src="~/assets/images/title-pic.png"
              alt="logo"
            />
          </div>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="mt50px">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ offset: 4, span: 16 }"
        :xl="{ offset: 4, span: 16 }"
        class="inner-container"
      >
        <el-row type="flex" justify="space-between benefits-flex-disabler">
          <el-col
            :xs="24"
            :sm="11"
            :md="11"
            :lg="11"
            :xl="11"
            class="benefits-col-wrap"
          >
            <el-card
              class="box-card"
              :body-style="{ height: '175px', borderRadius: '0' }"
            >
              <el-row class="d-flex align-items-flex-end benefits-wrap">
                <el-col
                  class="d-flex justify-center align-items-flex-end h128px max-w128px benefits-money"
                >
                  <img
                    class="img-present"
                    src="~/assets/images/money.png"
                    alt="logo"
                  />
                </el-col>
                <el-col class="benefits-col pl30px">
                  <div class="h95px">
                    <div
                      class="head-title-block style-normal fw-bold fs22px lh-normal color-black"
                    >
                      {{ $t("pages.main.benefits.join") }}
                    </div>
                    <p
                      class="head-text-block style-normal fw-normal fs14px lh-normal"
                    >
                      {{ $t("pages.main.benefits.invite") }}
                    </p>
                  </div>
                  <el-button class="benefits-btn fw700 w100" plain>{{
                    $t("pages.main.benefits.join_button")
                  }}</el-button>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <el-card
              class="box-card"
              :body-style="{ height: '175px', borderRadius: '0' }"
            >
              <el-row class="d-flex align-items-flex-end benefits-wrap">
                <el-col
                  class="d-flex justify-center align-items-flex-end h128px max-w128px benefits-present"
                >
                  <img
                    class="img-present"
                    src="~/assets/images/present.png"
                    alt="logo"
                  />
                </el-col>
                <el-col class="benefits-col pl30px">
                  <div class="h95px">
                    <div
                      class="head-title-block style-normal fw-bold fs22px lh-normal color-black"
                    >
                      {{ $t("pages.main.benefits.win") }}
                    </div>
                    <p
                      class="head-text-block style-normal fw-normal fs14px lh-normal"
                    >
                      {{ $t("pages.main.benefits.follow") }}
                    </p>
                  </div>
                  <el-button class="benefits-btn fw700 w100" plain>{{
                    $t("pages.main.benefits.join_button")
                  }}</el-button>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="mt70px">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ offset: 4, span: 16 }"
        :xl="{ offset: 4, span: 16 }"
        class="inner-container"
      >
        <h1 class="mb20px color-grey-light">
          {{ $t("pages.main.section_title.quick_buy") }}
        </h1>
        <el-card class="box-card card-inputs h80px">
          <el-form
            :inline="false"
            :model="formInline"
            class="d-flex justify-between quick-buy-table"
          >
            <el-form-item label="">
              <el-select
                v-model="formInline.currency"
                :placeholder="$t('placeholders.currency')"
                class="search-input"
              >
                <el-option label="BTB" value="shanghai"></el-option>
                <el-option label="DSA" value="beijing"></el-option>
                <el-option label="BVV" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-input
                v-model="formInline.user"
                :placeholder="$t('placeholders.amount')"
                class="search-input"
              ></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-select
                v-model="formInline.region"
                :placeholder="$t('placeholders.country')"
                class="search-input"
              >
                <el-option label="Ukraine" value="shanghai"></el-option>
                <el-option label="Belgium" value="beijing"></el-option>
                <el-option label="Austria" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-select
                v-model="formInline.region"
                :placeholder="$t('placeholders.payment')"
                class="search-input"
              >
                <el-option
                  label="Other online payment"
                  value="shanghai"
                ></el-option>
                <el-option
                  label="National bank transfer"
                  value="beijing"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button class="search-btn" type="danger" @click="onSubmit">{{
                $t("buttons.search")
              }}</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ offset: 4, span: 16 }"
        :xl="{ offset: 4, span: 16 }"
        class="inner-container"
      >
        <el-row>
          <h1 class="mb20px color-grey-light">
            {{ $t("pages.main.section_title.buy_online") }}
          </h1>
          <el-card class="box-card main-page-table-card">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                prop="buyer"
                width="235"
                :label="$t('placeholders.buyer')"
              >
                <template slot-scope="scope">
                  <el-row>
                    <el-col :span="7">
                      <img
                        class="table-avatar w40px radius50px"
                        src="~/assets/images/unknown_user.png"
                        alt=""
                      />
                    </el-col>
                    <el-col :span="15">
                      <div class="fs12px">
                        {{ scope.row.buyer.name }}
                      </div>
                      <div v-if="scope.row.buyer.status" class="">
                        <el-tag size="mini" type="success" effect="plain">{{
                          $t("tags.online")
                        }}</el-tag>
                      </div>
                      <div v-else class="fs12px">
                        {{ $t("placeholders.last_visit") }}:
                        {{ scope.row.buyer.last_visit }}
                      </div>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column
                prop="currency"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.currency')"
              >
                <template slot-scope="scope">
                  <el-tag effect="plain" type="warning" size="mini">{{
                    scope.row.currency
                  }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="ratting"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.ratting')"
              >
              </el-table-column>
              <el-table-column
                width="200"
                sortable
                prop="payment_system"
                :label="$t('placeholders.payment')"
              >
                <template slot-scope="scope">
                  <a class="text-decoration-none color-primary" href="#">{{
                    scope.row.payment_system
                  }}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="country"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.country')"
              >
                <template slot-scope="scope">
                  <a class="text-decoration-none color-primary" href="#">{{
                    scope.row.country
                  }}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="price"
                align="center"
                sortable
                :label="$t('placeholders.price')"
              >
              </el-table-column>
              <el-table-column
                prop="limits"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.limits')"
              >
              </el-table-column>
              <el-table-column prop="" align="right" label="">
                <template slot-scope="">
                  <el-button type="primary" size="mini">{{
                    $t("buttons.buy")
                  }}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <el-card shadow="always" class="card-mobile-proposals d-none">
            <div v-for="(buyer, key) in tableData" :key="key" class="mb20px">
              <el-row
                class="buyer-row bg-primary color-white p15-20px bg-primary color-white p15-20px"
              >
                <el-col :xs="24" :sm="24" :md="24">
                  <el-row>
                    <el-col :xs="8" :sm="8" :md="8" class="pt15px">
                      {{ $t("placeholders.buyer") }}
                    </el-col>
                    <el-col :xs="14" :sm="10" :md="10">
                      <el-row>
                        <el-col :xs="8" :sm="6" :md="6">
                          <img
                            class="table-avatar w40px radius50px"
                            src="~/assets/images/unknown_user.png"
                            alt=""
                          />
                        </el-col>
                        <el-col :xs="16" :sm="10" :md="10" class="pt5px">
                          <div>{{ buyer.buyer.name }}</div>
                          <div
                            v-if="buyer.buyer.status"
                            class="fs11px color-success"
                          >
                            <el-tag size="mini" type="success" effect="plain">{{
                              $t("tags.online")
                            }}</el-tag>
                          </div>
                          <div v-else class="fs12px">
                            {{ $t("placeholders.last_visit") }}:
                            {{ buyer.buyer.last_visit }}
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.currency") }}</el-col>
                <el-col :span="14">{{ buyer.currency }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.ratting") }}</el-col>
                <el-col :span="14">{{ buyer.ratting }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.payment") }}</el-col>
                <el-col :span="14" class="text-decoration-none color-primary">{{
                  buyer.payment_system
                }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.country") }}</el-col>
                <el-col :span="14">{{ buyer.country }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.price") }}</el-col>
                <el-col :span="14">{{ buyer.price }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.limits") }}</el-col>
                <el-col :span="14">{{ buyer.limits }}</el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-button plain type="primary" class="w100" size="mini">{{
                    $t("buttons.buy")
                  }}</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="mt70px">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ offset: 4, span: 16 }"
        :xl="{ offset: 4, span: 16 }"
        class="inner-container"
      >
        <h1 class="mb20px color-grey-light">
          {{ $t("pages.main.section_title.quick_sell") }}
        </h1>
        <el-card class="box-card card-inputs h80px">
          <el-form
            :inline="isInline"
            :model="formInline"
            class="d-flex justify-between quick-buy-table"
          >
            <el-form-item label="">
              <el-select
                v-model="formInline.currency"
                :placeholder="$t('placeholders.currency')"
                class="search-input"
              >
                <el-option label="BTB" value="shanghai"></el-option>
                <el-option label="DSA" value="beijing"></el-option>
                <el-option label="BVV" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-input
                v-model="formInline.user"
                :placeholder="$t('placeholders.amount')"
                class="search-input"
              ></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-select
                v-model="formInline.region"
                :placeholder="$t('placeholders.country')"
                class="search-input"
              >
                <el-option label="Ukraine" value="shanghai"></el-option>
                <el-option label="Belgium" value="beijing"></el-option>
                <el-option label="Austria" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-select
                v-model="formInline.region"
                :placeholder="$t('placeholders.payment')"
                class="search-input"
              >
                <el-option
                  label="Other online payment"
                  value="shanghai"
                ></el-option>
                <el-option
                  label="National bank transfer"
                  value="beijing"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button class="search-btn" type="danger" @click="onSubmit">{{
                $t("buttons.search")
              }}</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="{ offset: 4, span: 16 }"
        :xl="{ offset: 4, span: 16 }"
        class="inner-container"
      >
        <el-row>
          <h1 class="mb20px color-grey-light">
            {{ $t("pages.main.section_title.sell_online") }}
          </h1>
          <el-card class="box-card main-page-table-card">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                prop="buyer"
                width="235"
                :label="$t('placeholders.buyer')"
              >
                <template slot-scope="scope">
                  <el-row>
                    <el-col :span="7">
                      <img
                        class="table-avatar w40px radius50px"
                        src="~/assets/images/unknown_user.png"
                        alt=""
                      />
                    </el-col>
                    <el-col :span="15">
                      <div class="fs12px">
                        {{ scope.row.buyer.name }}
                      </div>
                      <div
                        v-if="scope.row.buyer.status"
                        class="fs11px color-success"
                      >
                        <el-tag size="mini" type="success" effect="plain">{{
                          $t("tags.online")
                        }}</el-tag>
                      </div>
                      <div v-else class="fs12px">
                        {{ $t("placeholders.last_visit") }}:
                        {{ scope.row.buyer.last_visit }}
                      </div>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column
                prop="currency"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.currency')"
              >
                <template slot-scope="scope">
                  <el-tag effect="plain" type="warning" size="mini">{{
                    scope.row.currency
                  }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="ratting"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.ratting')"
              >
              </el-table-column>
              <el-table-column
                width="200"
                sortable
                prop="payment_system"
                :label="$t('placeholders.payment')"
              >
                <template slot-scope="scope">
                  <a class="text-decoration-none color-primary" href="#">{{
                    scope.row.payment_system
                  }}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="country"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.country')"
              >
                <template slot-scope="scope">
                  <a class="text-decoration-none color-primary" href="#">{{
                    scope.row.country
                  }}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="price"
                align="center"
                sortable
                :label="$t('placeholders.price')"
              >
              </el-table-column>
              <el-table-column
                prop="limits"
                width="120"
                align="center"
                sortable
                :label="$t('placeholders.limits')"
              >
              </el-table-column>
              <el-table-column prop="" align="right" label="">
                <template slot-scope="">
                  <el-button type="primary" size="mini">{{
                    $t("buttons.buy")
                  }}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <el-card shadow="always" class="card-mobile-proposals d-none">
            <div v-for="(buyer, key) in tableData" :key="key" class="mb20px">
              <el-row class="buyer-row bg-primary color-white p15-20px">
                <el-col :xs="24" :sm="24" :md="24">
                  <el-row>
                    <el-col :xs="8" :sm="8" :md="8" class="pt15px">
                      {{ $t("placeholders.seller") }}
                    </el-col>
                    <el-col :xs="14" :sm="10" :md="10">
                      <el-row>
                        <el-col :xs="8" :sm="6" :md="6">
                          <img
                            class="table-avatar w40px radius50px"
                            src="~/assets/images/unknown_user.png"
                            alt=""
                          />
                        </el-col>
                        <el-col :xs="16" :sm="10" :md="10" class="pt5px">
                          <div>{{ buyer.buyer.name }}</div>
                          <div
                            v-if="buyer.buyer.status"
                            class="fs11px color-success"
                          >
                            <el-tag size="mini" type="success" effect="plain">{{
                              $t("tags.online")
                            }}</el-tag>
                          </div>
                          <div v-else class="fs12px">
                            {{ $t("placeholders.last_visit") }}:
                            {{ buyer.buyer.last_visit }}
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.currency") }}</el-col>
                <el-col :span="14">{{ buyer.currency }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.ratting") }}</el-col>
                <el-col :span="14">{{ buyer.ratting }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.payment") }}</el-col>
                <el-col :span="14" class="text-decoration-none color-primary">{{
                  buyer.payment_system
                }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.country") }}</el-col>
                <el-col :span="14">{{ buyer.country }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.price") }}</el-col>
                <el-col :span="14">{{ buyer.price }}</el-col>
              </el-row>
              <el-row class="pl20px">
                <el-col :span="8">{{ $t("placeholders.limits") }}</el-col>
                <el-col :span="14">{{ buyer.limits }}</el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-button class="w100" plain type="primary" size="mini">{{
                    $t("buttons.buy")
                  }}</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    formInline: {
      user: "",
      currency: "",
      region: "",
    },
    tableData: [
      {
        buyer: {
          name: "Frozen Yogurt",
          last_visit: "2020:02:01",
          status: false,
        },
        currency: "BTN",
        ratting: 7,
        payment_system: "Other online payment",
        country: "Belgium",
        price: 12223,
        limits: "100-300000",
      },
      {
        buyer: {
          name: "Frozen Yogurt",
          last_visit: "2020:02:01",
          status: true,
        },
        currency: "LDM",
        ratting: 2,
        payment_system: "National bank transfer",
        country: "Austria",
        price: 3221,
        limits: "100-20300",
      },
      {
        buyer: {
          name: "Frozen Yogurt",
          last_visit: "2020:02:01",
          status: true,
        },
        currency: "HDN",
        ratting: 9,
        payment_system: "National bank transfer",
        country: "Germany",
        price: 331,
        limits: "100-320300",
      },
    ],
  }),
  computed: {
    innerWidthComputed() {
      return false;
    },
    isInline() {
      return this.innerWidthComputed > 600;
    },
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss">
.image-banner {
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
