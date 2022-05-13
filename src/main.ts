import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { User, Lock, Expand, Fold, CaretBottom, Close } from '@element-plus/icons-vue'

createApp(App).use(store)
.component('user', User)
.component('lock', Lock)
.component('expand', Expand)
.component('fold', Fold)
.component('caretBottom', CaretBottom)
.component('close', Close)

.use(router).use(ElementPlus).mount("#app");