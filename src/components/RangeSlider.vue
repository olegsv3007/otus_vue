<template>
  <span id="range_label">{{ title }}</span>
  <div class="flex justify-content-between mb-2">
    <div>{{ value[0] }}</div>
    <div>{{ value[1] }}</div>
  </div>
  <Slider
      :model-value="value"
      @update:model-value="(modelValue: number[])=> $emit('update', modelValue)"
      range
      :min="min"
      :max="max"
      aria-label="range_label"
  />
</template>

<script setup lang="ts">
import Slider from "primevue/slider";

interface Props {
  title: string,
  min: number,
  max: number,
  value: Array<number>,
}

defineProps<Props>();

defineEmits(['update']);

</script>

<style scoped>

</style>