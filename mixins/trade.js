import { mapActions } from "vuex";

export default {
  data: () => ({
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
    tradeSimpleForm() {
      return this.$store.state.trade.trade_simple_form;
    },
  },

  methods: {
    ...mapActions({
      setTradeSimpleForm: "trade/setTradeSimpleForm",
    }),
  },
};
