import { mapActions } from 'vuex';

export default {

    computed: {
        tradeSimpleForm() {
            return this.$store.state.trade.tradeSimpleForm
        }
    },

    methods: {
        ...mapActions({
            setTradeSimpleForm: 'trade/setTradeSimpleForm',
        })
    }
}
