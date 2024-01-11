<template>
  <v-menu transition="slide-y-transition" min-width="0" scrim :close-on-content-click="false" v-model="menu">
    <template v-slot:activator="{ props }">
      <v-text-field
        density="compact"
        hide-details
        prepend-inner-icon="mdi-calendar-month"
        variant="outlined"
        v-bind="props"
        readonly
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="formatted"
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
