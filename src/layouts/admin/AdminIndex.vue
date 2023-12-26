<template>
  <AdminHeader />

  <AdminDrawer />
  <AdminMain />

  <AdminFooter />
</template>

<script>
import { AdminHeader, AdminMain, AdminFooter, AdminDrawer } from "./items/AdminDefault";

export default {
  components: { AdminHeader, AdminMain, AdminFooter, AdminDrawer },
};
</script>

<!-- <template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>
  </v-layout>
</template> -->
