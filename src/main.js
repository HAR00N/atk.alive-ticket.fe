import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify/vuetify";
import VueDatePicker from "@vuepic/vue-datepicker";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vuepic/vue-datepicker/dist/main.css";
import { loadFonts } from "./plugins/web/webfontloader";

import globalFunction from "./plugins/global";

loadFonts();

// eslint-disable-next-line prettier/prettier
createApp(App).use(router).use(store).use(vuetify).use(globalFunction).component('QuillEditor', QuillEditor).component("VueDatePicker",VueDatePicker).mount("#app");
