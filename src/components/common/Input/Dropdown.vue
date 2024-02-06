<template>
  <div class="flex flex-column gap-2 w-full">
    <label :for="label">{{ label }}</label>
    <Dropdown
        :id="label"
        :model-value="value"
        :options="options"
        class="w-full"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import Dropdown from "primevue/dropdown";

interface Props {
  label: string,
  value: string,
  options: Array<string>,
  placeholder?: string,
}

defineProps<Props>();
const emit = defineEmits(['update']);
</script>