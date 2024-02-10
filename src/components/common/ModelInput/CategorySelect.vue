<template>
  <Dropdown
    :value="value"
    :options="categories"
    :placeholder="placeholder"
    :label="label"
    @update:value="(modelValue) => emit('update:value', modelValue)"
    :error="error"
  />
</template>

<script setup lang="ts">
import Dropdown from "../Input/Dropdown.vue";
import {CategoryService} from "../../../services/CategoryService.ts";

const categoryService: CategoryService = new CategoryService();
const categories: Array<string> = categoryService.getAll();

interface Props {
  value: string,
  label?: string,
  placeholder?: string,
  error?: string,
}

withDefaults(defineProps<Props>(), {label: 'Select Category'});
const emit = defineEmits(['update:value']);
</script>