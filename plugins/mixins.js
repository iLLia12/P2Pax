import Vue from 'vue';
import Errors from '../includes/Error';
import trade from '../mixins/trade';
import profile from '../mixins/profile';


export default (app, inject) => {

    Vue.mixin({
        data:() => ({
            errors: new Errors(),
        }),
        methods: {
            ...trade.methods,
            ...profile.methods,
        },
        computed: {
            ...trade.computed,
            ...profile.computed,
        },
    })
}
