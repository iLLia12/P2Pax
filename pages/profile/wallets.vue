<template>
  <el-row class="content-wrap wallets-index-wrap">
    <el-col
      :xs="24"
      :sm="24"
      :md="24"
      :lg="{ offset: 4, span: 16 }"
      :xl="{ offset: 4, span: 16 }"
      class="inner-container"
    >
      <el-row>
        <el-col
          :xs="24"
          :sm="24"
          :md="4"
          :lg="4"
          :xl="4"
          class="side-menu-wrap"
        >
          <SideMenu />
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 19, offset: 1 }"
          :lg="{ span: 19, offset: 1 }"
          :xl="{ span: 19, offset: 1 }"
        >
          <el-row class="wallets-inner-wrap">
            <el-col>
              <h1 class="profile-title">My Wallets</h1>
              <el-card
                class="box-card profile-menu-wrap"
                :body-style="{ borderRadius: '0' }"
              >
                <el-form
                  label-position="top"
                  :model="form"
                  :inline="true"
                  class="form-filters"
                >
                  <el-row>
                    <el-col
                      :xs="{ span: 23, offset: 1 }"
                      :sm="{ span: 23, offset: 1 }"
                      :md="{ span: 4, offset: 1 }"
                      :lg="{ span: 4, offset: 1 }"
                      :xl="{ span: 4, offset: 1 }"
                    >
                      <el-form-item label="" style="width: 100%">
                        <el-select
                          v-model="form.country"
                          placeholder=""
                          class="search-input"
                          style="width: 100%"
                        >
                          <el-option
                            label="Ukraine"
                            value="shanghai"
                          ></el-option>
                          <el-option
                            label="Australia"
                            value="beijing"
                          ></el-option>
                          <el-option
                            label="Belgium"
                            value="beijing"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col
                      :xs="{ span: 23, offset: 1 }"
                      :sm="{ span: 23, offset: 1 }"
                      :md="{ span: 4, offset: 1 }"
                      :lg="{ span: 4, offset: 1 }"
                      :xl="{ span: 4, offset: 1 }"
                    >
                      <el-form-item label="" style="width: 100%">
                        <el-input
                          v-model="form.country"
                          placeholder=""
                        ></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col
                      :xs="{ span: 23, offset: 1 }"
                      :sm="{ span: 23, offset: 1 }"
                      :md="{ span: 4, offset: 1 }"
                      :lg="{ span: 4, offset: 1 }"
                      :xl="{ span: 4, offset: 1 }"
                    >
                      <el-form-item label="" style="width: 100%">
                        <el-input
                          v-model="form.country"
                          placeholder=""
                        ></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col
                      :xs="{ span: 23, offset: 1 }"
                      :sm="{ span: 23, offset: 1 }"
                      :md="{ span: 4, offset: 1 }"
                      :lg="{ span: 4, offset: 1 }"
                      :xl="{ span: 4, offset: 1 }"
                    >
                      <el-form-item label="" style="width: 100%">
                        <el-input
                          v-model="form.country"
                          placeholder=""
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
                <el-table
                  class="wallets-table"
                  :data="wallets"
                  style="width: 100%"
                >
                  <el-table-column
                    prop="currency"
                    width="120px"
                    label="Coin"
                    sortable
                  >
                  </el-table-column>
                  <el-table-column
                    align="center"
                    width="110px"
                    prop="available"
                    label="Available"
                    sortable
                  >
                    <template slot-scope="scope">
                      <div>{{ scope.row.available }}</div>
                      <div class="table-symbol">{{ scope.row.symbol }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="frozen"
                    width="110px"
                    label="Frozen"
                    sortable
                  >
                    <template slot-scope="scope">
                      <div>{{ scope.row.frozen }}</div>
                      <div class="table-symbol">{{ scope.row.symbol }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    width="120px"
                    prop="operation"
                    label="Operation"
                    sortable
                  >
                  </el-table-column>
                  <el-table-column align="right" prop="" label="">
                    <template slot-scope="scope">
                      <el-row>
                        <el-col
                          :xs="{ span: 23, offset: 1 }"
                          :sm="{ span: 23, offset: 1 }"
                          :md="{ span: 23, offset: 1 }"
                          :lg="{ span: 4, offset: 1 }"
                          :xl="{ span: 4, offset: 1 }"
                        >
                          <el-button size="mini" round>Deposit</el-button>
                        </el-col>
                        <el-col
                          :xs="{ span: 23, offset: 1 }"
                          :sm="{ span: 23, offset: 1 }"
                          :md="{ span: 23, offset: 1 }"
                          :lg="{ span: 4, offset: 1 }"
                          :xl="{ span: 4, offset: 1 }"
                        >
                          <el-button size="mini" round>Withdraw</el-button>
                        </el-col>
                        <el-col
                          :xs="{ span: 23, offset: 1 }"
                          :sm="{ span: 23, offset: 1 }"
                          :md="{ span: 23, offset: 1 }"
                          :lg="{ span: 4, offset: 1 }"
                          :xl="{ span: 4, offset: 1 }"
                        >
                          <el-button size="mini" round>Transfer</el-button>
                        </el-col>
                        <el-col
                          :xs="{ span: 23, offset: 1 }"
                          :sm="{ span: 23, offset: 1 }"
                          :md="{ span: 23, offset: 1 }"
                          :lg="{ span: 4, offset: 1 }"
                          :xl="{ span: 4, offset: 1 }"
                        >
                          <el-button size="mini" round>History</el-button>
                        </el-col>
                      </el-row>
                    </template>
                  </el-table-column>
                </el-table>

                <div class="wallets-tiles">
                  <div v-for="wallet in wallets">
                    <el-row style="margin: 20px 25px">
                      <el-row>
                        <el-col :span="8">Coin:</el-col>
                        <el-col :span="16"
                          >{{ wallet.currency }}
                          <span class="table-symbol">
                            <el-tag size="mini">{{
                              wallet.symbol
                            }}</el-tag></span
                          ></el-col
                        >
                      </el-row>
                      <el-row>
                        <el-col :span="8">Available:</el-col>
                        <el-col :span="16">{{ wallet.available }}</el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="8">Frozen:</el-col>
                        <el-col :span="16">{{ wallet.frozen }}</el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="8">Operation:</el-col>
                        <el-col :span="16">{{ wallet.operation }}</el-col>
                      </el-row>
                      <el-col class="small-buttons-wrap">
                        <el-row>
                          <el-col
                            class="btn-wrap"
                            :xs="{ span: 24, offset: 0 }"
                            :sm="{ span: 24, offset: 0 }"
                            :md="{ span: 24, offset: 0 }"
                            :lg="{ span: 24, offset: 0 }"
                            :xl="{ span: 24, offset: 0 }"
                          >
                            <el-button size="mini" round>Deposit</el-button>
                            <el-button size="mini" round>Withdraw</el-button>
                            <el-button size="mini" round>Transfer</el-button>
                            <el-button size="mini" round>History</el-button>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col class="big-buttons-wrap">
                        <el-row>
                          <el-col class="btn-mob-wrap">
                            <el-button size="mini" round>Deposit</el-button>
                          </el-col>
                          <el-col class="btn-mob-wrap">
                            <el-button size="mini" round>Withdraw</el-button>
                          </el-col>
                          <el-col class="btn-mob-wrap">
                            <el-button size="mini" round>Transfer</el-button>
                          </el-col>
                          <el-col class="btn-mob-wrap">
                            <el-button size="mini" round>History</el-button>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                    <el-divider></el-divider>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import SideMenu from "../../components/Profile/SideMenu";
export default {
  name: "Wallets",
  components: {
    SideMenu,
  },
  data: () => ({
    form: {},
    wallets: [
      {
        currency: "Bitcoin",
        symbol: "BTC",
        available: 0,
        frozen: 0,
        operation: 0.0,
      },
      {
        currency: "Ethereum",
        symbol: "ETH",
        available: 0,
        frozen: 0,
        operation: 0.0,
      },
      {
        currency: "Au Coin",
        symbol: "XAU",
        available: 0,
        frozen: 0,
        operation: 0.0,
      },
      {
        currency: "ShowHand",
        symbol: "HAND",
        available: 0,
        frozen: 0,
        operation: 0.0,
      },
      {
        currency: "Ripple",
        symbol: "XRP",
        available: 0,
        frozen: 0,
        operation: 0.0,
      },
      {
        currency: "Zagadov Coin",
        symbol: "ZC",
        available: 0,
        frozen: 0,
        operation: 0.0,
      },
      {
        currency: "Affil Coin",
        symbol: "AC",
        available: 109.46,
        frozen: 0.5,
        operation: 0.0,
      },
    ],
  }),
};
</script>

<style lang="scss">
.wallets-index-wrap {
  margin-top: 40px;
  .profile-title {
    margin-bottom: 30px;
    color: $--color-grey-light;
  }
  .wallets-table {
    display: block;
  }
  .wallets-tiles {
    display: none;
  }
  .form-filters {
    padding: 10px 40px 0 0;
  }
  .table-symbol {
    font-size: 10px;
    color: $--color-text-secondary;
  }
  .btn-wrap {
    display: block;
  }
  .big-buttons-wrap {
    display: none;
  }
  .btn-mob-wrap {
    margin-bottom: 10px;
    > button {
      width: 100%;
    }
  }
}
</style>
