<template>
  <div class="flex flex-column gap-2 w-full">
    <label :for="label">{{ label }}</label>
    <InputNumber
        :model-value="value"
        :placeholder="placeholder"
        @update:model-value="(modelValue?: number): void => emit('update:value', modelValue)"
        mode="currency"
        :inputId="label"
        currency="USD"
        locale="en-US"
    />
  </div>
</template>

<script setup lang="ts">
import InputNumber from "primevue/inputnumber";

interface Props {
  label: string,
  value: number,
  placeholder?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>