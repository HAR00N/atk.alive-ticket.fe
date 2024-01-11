<template>
  <v-container class="content-box" style="text-align: left !important" v-show="pagenum == 1">
    <div class="content-inner">
      <p class="title-font">Insert your Project Serial Number</p>
      <div class="inner-input">
        <v-text-field
          v-model="code"
          label="project serial number"
          variant="underlined"
          :error-messages="error_msg"
          :rules="[rules.code.valid]"
        ></v-text-field>
        <!--        <v-btn variant="flat" class="text-none text-white next-button" color="#84D95E">-->
        <!--          Login-->
        <!--        </v-btn>-->
      </div>
      <div>
        <p>· Your sign In will be done after approve.</p>
        <p>· If you don’t know serial number, please request your manager.</p>
        <p>· If you’ve forgotten your serial number, please contact Alive-Ticket Team.</p>
      </div>
    </div>
  </v-container>
  <v-container class="content-box" style="width: 40%" v-show="pagenum == 2">
    <v-btn variant="flat" class="text-none text-white next-button" color="#84D95E" @click="prev"> prev </v-btn>
    <div class="terms-area">
      <div class="unread-ticket" style="">
        <input type="checkbox" id="check" v-model="checked" />
        <label for="check" />
        <p class="only-unread-ticket">Only Unread Ticket</p>
      </div>
      <div class="inner-scroll"></div>
    </div>
    <div class="terms-area">
      <div class="unread-ticket" style="">
        <input type="checkbox" id="check2" v-model="checked2" />
        <label for="check2" />
        <p class="only-unread-ticket">Only Unread Ticket</p>
      </div>
      <div class="inner-scroll"></div>
    </div>
    <div class="last-button">
      <v-btn
        variant="flat"
        class="text-white w-100 rounded-lg"
        size="x-large"
        color="#84D95E"
        style="height: 50px"
        @click="nextToLast"
      >
        Next
      </v-btn>
    </div>
  </v-container>
  <v-container class="content-box" style="width: 40%" v-show="pagenum == 3">
    <div class="last-outer-content">
      <div class="content-box">
        <div class="content-inner">
          <div class="text-area">
            <span class="title-font">Company</span>
            <span class="con-font">nantaekyung cops.</span>
          </div>
          <div class="middel-bar"></div>
          <div class="text-area">
            <span class="title-font">Project</span>
            <span class="con-font">Alive-tickets</span>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="content-inner">
          <v-text-field
            variant="underlined"
            type="text"
            label="ID"
            prepend-inner-icon="mdi-account-outline"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            type="password"
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
          ></v-text-field>
        </div>
      </div>
      <div class="content-box">
        <div class="content-inner">
          <v-text-field
            variant="underlined"
            type="text"
            label="name"
            prepend-inner-icon="mdi-account-outline"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            type="text"
            label="department"
            prepend-inner-icon="mdi-briefcase-outline"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            type="text"
            label="office call"
            prepend-inner-icon="mdi-phone-classic"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            type="text"
            label="cell phone"
            prepend-inner-icon="mdi-cellphone"
          ></v-text-field>
        </div>
      </div>
      <div class="last-button">
        <v-btn variant="flat" class="text-white w-100 rounded-lg" size="x-large" color="#84D95E" style="height: 50px">
          Save
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "signin",
  data() {
    return {
      pagenum: 1,

      code: "",
      error_msg: [],
      rules: {
        code: {
          valid: (v) => this.validateCode(v),
        },
      },

      checked: false,
      checked2: false,
    };
  },
  mounted() {},
  methods: {
    validateCode(v) {
      let vm = this;

      console.log(v);

      if (vm.code == "" || vm.code == "12345") {
        vm.error_msg = [];
        if (vm.code == "12345") {
          vm.pagenum = 2;
        }
      } else {
        vm.error_msg = ["코드가 일치하지 않습니다."];
      }
    },
    prev() {
      let vm = this;
      vm.code = "";
      vm.pagenum = 1;
    },

    nextToLast() {
      let vm = this;

      if (vm.checked && vm.checked2) {
        vm.pagenum = 3;
      } else {
        alert("동의사항에 전부 체크하지 않으셨습니다.");
      }
    },

    validatePW(){

    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/signin.scss";
</style>
