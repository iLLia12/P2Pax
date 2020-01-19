import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = () => ({
    tradeSimpleForm:{
        currency_to_buy:'DFV',
        currency_to_sell:'SDF',
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
