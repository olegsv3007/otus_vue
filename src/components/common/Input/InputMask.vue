<template>
  <div class="flex flex-column gap-1 w-full">
    <label :for="label">{{ label }}</label>
    <InputMask
        :id="label"
        :model-value="value"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        :mask="mask"
        :class="error ? 'p-invalid' : ''"
    />
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import InputMask from "primevue/inputmask";

interface Props {
  label: string,
  value: string|number,
  placeholder?: string,
  mask: string,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>