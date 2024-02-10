<template>
  <Dropdown
    :value="value"
    :options="countries"
    :placeholder="placeholder"
    :label="label"
    @update:value="(modelValue) => emit('update:value', modelValue)"
  />
</template>

<script setup lang="ts">
import {CountryService} from "../../../services/CountryService.ts";
import Dropdown from "../Input/Dropdown.vue";

const countryService: CountryService = new CountryService();
const countries: Array<string> = countryService.getAll();

interface Props {
  value: string,
  label?: string,
  placeholder?: string,
}

withDefaults(defineProps<Props>(), {label: 'Select Country'});
const emit = defineEmits(['update:value']);
</script>