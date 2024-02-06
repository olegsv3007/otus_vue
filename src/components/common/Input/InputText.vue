<template>
  <div class="flex flex-column gap-2 w-full">
    <label :for="label">{{ label }}</label>
    <InputText
        :id="label"
        :value="value"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";

interface Props {
  label: string,
  value: string,
  placeholder?: string,
}

defineProps<Props>();
const emit = defineEmits(['update']);
</script>