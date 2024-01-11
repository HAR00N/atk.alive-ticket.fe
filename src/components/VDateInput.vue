<template>
  <v-menu transition="slide-y-transition" min-width="0" scrim :close-on-content-click="false" v-model="menu">
    <template v-slot:activator="{ props }">
      <v-text-field
        density="compact"
        hide-details
        prepend-inner-icon="mdi-calendar-month"
        variant="plain"
        v-bind="props"
        readonly
        class="date-style"
        :placeholder="placeholder"
        v-model="formatted"
      ></v-text-field>
    </template>
    <v-list class="pa-0">
      <v-date-picker color="primary" v-model="selDate">
        <template v-slot:title></template>
        <template v-slot:header></template>
      </v-date-picker>
    </v-list>
  </v-menu>
</template>
<script>
import moment from "moment";
export default {
  props: {
    placeholder: { type: String, default: "날짜" },
  },
  data: () => ({
    menu: false,
    selDate: null,
  }),
  computed: {
    formatted() {
      const vm = this;
      return vm.selDate ? moment(vm.selDate).format("YYYY-MM-DD") : "";
    },
  },
  watch: {
    selDate() {
      const vm = this;
      vm.menu = false;
      vm.$emit("selectedDate", vm.selDate);
    },
  },
  methods: {
    moment,
  },
};
</script>
<style scoped>
.date-style {
  padding: 0.8rem 1rem 0.7rem 1rem;
  /*padding-bottom: 0.7rem;
  padding-top: 0.8rem;*/
  width: 100%;

  align-items: center;
  border: solid 0.1rem #000000;
  border-radius: 1rem;
}
</style>
