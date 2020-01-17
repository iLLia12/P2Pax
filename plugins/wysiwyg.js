import Vue from 'vue'
import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {
    hideModules: {
        "table": true,
        "removeFormat": true,
        "code": true,
        "orderedList": true,
        "justifyLeft": true,
        "justifyCenter": true,
        "justifyRight": true,
        "image": true,
    },
});
