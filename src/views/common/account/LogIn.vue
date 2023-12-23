<template>
  <v-container class="login-box">
    <div>
      <img src="/src/assets/images/logos/logo.png" />
    </div>
    <div class="text-field">
      <v-text-field
          variant="underlined"
          label="ID"
          prepend-inner-icon="mdi-account-outline"
      ></v-text-field>
      <v-text-field
          variant="underlined"
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
      ></v-text-field>
    </div>
    <div class="button-field">
      <v-btn variant="flat" class="text-none text-white w-100" color="#84D95E" @click="getLoginToken">
        Login
      </v-btn>
      <v-btn variant="text" class="text-none text-black w-100" @click="$routerName('signin')">
        sign in
      </v-btn>
    </div>
    <div class="end-content">
      <span>If you forget your account, please contact alive-ticket teams</span>
    </div>
  </v-container>
</template>

<script>
import { loginstore } from "@/store/login";
export default {
  name: "LogIn",
  data() {
    return {
      useloginstore: loginstore(),
    };
  },
  mounted() {},
  methods: {
    getLoginToken() {
      let vm = this;

      // 로그인 세션 불러오는 api
      // 성공하면 토큰을 loginstate를 true로 하고 토큰을 저장

      vm.useloginstore.settingloginstate(true);
      vm.useloginstore.settingAccessToken("token");
      vm.$routerName("clientHome");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/login.scss";
</style>
