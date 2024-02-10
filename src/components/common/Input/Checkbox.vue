<template>
  <div class="flex align-items-center">
    <Checkbox
        :inputId="label"
        :model-value="value"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        binary
        :class="error ? 'p-invalid' : ''"
    />
    <label :for="label" class="ml-2">{{ label }}</label>
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox';

interface Props {
  label: string,
  value: boolean,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>