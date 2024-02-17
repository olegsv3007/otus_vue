<template>
  <div class="flex flex-column gap-1 w-full">
    <label :for="label">{{ label }}</label>
    <Editor
        :id="label"
        :model-value="value"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update:value', modelValue)"
        :editor-style="{height: '160px', border: error ? '1px solid red': ''}"
    />
    <span class="text-xs p-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import Editor from "primevue/editor";

interface Props {
  label: string,
  value: string,
  placeholder?: string,
  error?: string,
}

defineProps<Props>();
const emit = defineEmits(['update:value']);
</script>

