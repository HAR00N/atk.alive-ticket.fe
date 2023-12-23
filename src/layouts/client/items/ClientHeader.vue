<template>
  <v-app-bar elevation="0" class="px-12">
    <template v-slot:prepend>
      <img
        class="main_logo"
        src="@/assets/images/logos/logo_title.png"
        alt="alive_ticket"
        style="cursor: pointer"
        @click="$routerName('clientHome')"
      />
    </template>

    <v-btn class="text-none" @click="$routerName('client')" color="#84D95E">Home</v-btn>
    <v-btn class="text-none" @click="$routerName('tickets')" color="#84D95E">Tickets</v-btn>
    <v-btn variant="flat" class="text-none text-white" @click="$routerName('submit')" color="#84D95E"> Submit </v-btn>

    <!-- 로그인 시 -->
    <div v-if="loginstore.getloginstate">
      <v-btn
        @click="this.$routerPush('/client/mypage')"
        class="ml-2"
        variant="outlined"
        icon
        size="small"
        color="#84D95E"
      >
        <v-icon color="#84D95E">mdi-account</v-icon>
      </v-btn>

      <v-btn variant="flat" class="text-none text-white ml-2" color="#84D95E" @click="logOut">LogOut</v-btn>
    </div>

    <!-- 비로그인 시 -->
    <div v-else>
      <v-btn class="pr-0" @click="$routerName('login')" color="#84D95E">Login</v-btn>
      |
      <v-btn class="pl-0" @click="$routerName('signin')" color="#84D95E">SignIn</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { loginstore } from "@/store/login";
export default {
  data: () => ({
    loginstore: loginstore(),
  }),
  methods: {
    logOut() {
      let vm = this;

      //로그아웃 api 호출 후 성공하면 로그인토큰과 state를 전부 초기화

      vm.loginstore.settingLogOut();
      vm.$routerName("clientHome");
    },
  }
};
</script>

<style>
.main_logo {
  max-height: 100%;
  height: auto;
}
</style>
