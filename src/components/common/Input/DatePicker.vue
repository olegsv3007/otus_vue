<template>
  <div class="flex flex-column gap-1 w-full">
    <label :for="label">{{ label }}</label>
    <Calendar
        :input-id="label"
        :model-value="value"
        showIcon
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        :class="error ? 'p-invalid' : ''"
    />
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import Calendar from "primevue/calendar";

interface Props {
  label: string,
  value: Date,
  placeholder?: string,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>