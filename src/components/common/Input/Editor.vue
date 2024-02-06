<template>
  <div class="flex flex-column gap-2 w-full">
    <label :for="label">{{ label }}</label>
    <Editor
        :id="label"
        :model-value="value"
        :placeholder="placeholder"
        @update:model-value="(modelValue: string): void => emit('update', modelValue)"
        editorStyle="height: 160px"
    />
  </div>
</template>

<script setup lang="ts">
import Editor from "primevue/editor";

interface Props {
  label: string,
  value: string,
  placeholder?: string,
}

defineProps<Props>();
const emit = defineEmits(['update']);
</script>