<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>
<style lang="scss">
@import "@/assets/sass/default.scss";
</style>
