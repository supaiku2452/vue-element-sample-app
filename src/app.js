import Vue from "vue";
import Main from "./component/Main.vue";

// Element
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/ja";
import "element-ui/lib/theme-chalk/index.css";


Vue.use(Element, {locale});

new Vue({
    el: "#main",
    components: {
        "main-component": Main,
    },
    template: `
<el-container>
    <main-component></main-component>
</el-container>`
});

