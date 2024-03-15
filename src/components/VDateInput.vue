<template>
  <v-menu transition="slide-y-transition" min-width="0" scrim :close-on-content-click="false" v-model="menu">
    <template v-slot:activator="{ props }">
      <v-text-field
        hide-details
        solo
        prepend-inner-icon="mdi-calendar-month"
        variant="outlined"
        v-bind="props"
        readonly
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="formatted"
        class="date-input rounded-lg"
      ></v-text-field>
    </template>
    <v-list class="pa-0">
      <v-date-picker color="primary" v-model="selDate" @update:model-value="changeDatePicker">
        <template v-slot:title></template>
        <template v-slot:header></template>
      </v-date-picker>
    </v-list>
  </v-menu>
</template>

<script setup>
import moment from "moment";
import { computed, ref } from "vue";

const menu = ref(false);
const selDate = ref(null);

const model = defineModel();

defineProps({
  placeholder: { type: String, default: "날짜" },
  disabled: { type: Boolean, default: false },
});

const formatted = computed(() => {
  return selDate.value ? moment(selDate.value).format("YYYY-MM-DD") : "";
});

const changeDatePicker = () => {
  menu.value = false;
  model.value = selDate.value;
};
</script>

<style scoped>
.date-input{
  color: black;
  /*border: solid 0.3rem #000000;*/
  /*border-radius: 1rem;*/
}
.date-input.v-input .v-input__slot {
  border-radius: 1rem;
}
input.v-field__input {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
