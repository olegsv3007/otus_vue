<template>
  <div class="flex flex-column gap-1 w-full">
    <label :for="label">{{ label }}</label>
    <div class="w-full">
      <Password
          :input-id="label"
          :model-value="value"
          :placeholder="placeholder"
          @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
          class="w-full"
          :input-class="error ? 'p-invalid w-full' : 'w-full'"
          toggle-mask
          :feedback="false"
      />
    </div>
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import Password from "primevue/password";

interface Props {
  label: string,
  value: string,
  placeholder?: string,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>