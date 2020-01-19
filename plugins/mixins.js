import Vue from 'vue';
import Errors from '../includes/Error';
import trade from '../mixins/trade';


export default (app, inject) => {

    Vue.mixin({
        data:() => ({
            errors: new Errors(),
        }),
        methods: {
            ...trade.methods,
        },
        computed: {
            ...trade.computed,
        },
    })
}
