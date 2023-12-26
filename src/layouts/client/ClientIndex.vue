<template>
  <ClientHeader />

  <ClientTitle />

  <ClientMain />

  <ClientFooter />
</template>

<script>
import { ClientHeader, ClientTitle, ClientMain, ClientFooter } from "./items/ClientDefault";

export default {
  components: { ClientHeader, ClientTitle, ClientMain, ClientFooter },
};
</script>
