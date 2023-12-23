import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const loginstore = defineStore("login", {
  state: () => ({
    loginstate: useLocalStorage("loginstate", false),
    accesstoken: useLocalStorage("accesstoken", ""),
  }),
  actions: {
    settingloginstate(loginstate) {
      this.loginstate = loginstate;
    },
    settingAccessToken(accesstoken) {
      this.accesstoken = accesstoken;
    },

    settingLogOut() {
      this.loginstate = false;
      this.accesstoken = "";
    },
  },
  getters: {
    getloginstate(state) {
      return state.loginstate;
    },
    getAccessToken(state) {
      return state.accesstoken;
    },
  },
});
