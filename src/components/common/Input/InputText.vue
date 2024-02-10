<template>
  <div class="flex flex-column gap-1 w-full">
    <label :for="label">{{ label }}</label>
    <InputText
        :id="label"
        :value="value"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        :class="error ? 'p-invalid' : ''"
    />
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";

interface Props {
  label: string,
  value: string,
  placeholder?: string,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>