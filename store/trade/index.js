import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = () => ({
    trade_simple_form:{
        currency_to_buy:'DFV',
        currency_to_sell:'SDF',
        currency_sell_amount:'',
        currency_sell_price:8500,
        currency_buy_amount:'',
        currency_buy_price:'',
        currency_sell:'',
        currency_buy:'',
        manual_checkbox:'',
        manual_value:'',
        market_checkbox:'',
        market_value:'',
        bank_card:'',
        cash:'',
        other:'',
    }
});

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

export default {
    state,
    actions,
    mutations,
    getters
}
