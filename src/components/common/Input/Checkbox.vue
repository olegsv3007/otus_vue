<template>
  <div class="flex align-items-center">
    <Checkbox
        :inputId="label"
        :model-value="value"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        binary
    />
    <label :for="label" class="ml-2">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox';

interface Props {
  label: string,
  value: boolean,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>