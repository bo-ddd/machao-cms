import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'
import App from "./App.vue";
import router from "./router";
import locale from 'element-plus/lib/locale/lang/zh-cn';
import "./assets/main.css";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus,{locale})
app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
