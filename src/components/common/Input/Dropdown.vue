<template>
  <div class="flex flex-column gap-1 w-full">
    <label :for="label">{{ label }}</label>
    <Dropdown
        :input-id="label"
        :model-value="value"
        :options="options"
        class="w-full"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        :class="error ? 'p-invalid' : ''"
    />
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import Dropdown from "primevue/dropdown";

interface Props {
  label: string,
  value: string,
  options: Array<string>,
  placeholder?: string,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>