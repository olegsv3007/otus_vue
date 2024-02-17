<template>
  <span id="range_label">{{ title }}</span>
  <div class="flex justify-content-between mb-2">
    <div>{{ sliderValue[0] }}</div>
    <div>{{ sliderValue[1] }}</div>
  </div>
  <Slider
      :model-value="sliderValue"
      @update:model-value="(value: Array<number>) => sliderValue = value"
      @slideend="onSlideEnd"
      range
      :min="min"
      :max="max"
      aria-label="range_label"
      :disabled="max === min"
  />
</template>

<script setup lang="ts">
import Slider from "primevue/slider";
import {Ref, ref, watch} from "vue";

interface Props {
  title: string,
  min: number,
  max: number,
  value: Array<number>,
}

const props = defineProps<Props>();
const sliderValue: Ref<Array<number>> = ref(props.value);

watch(
  () => props.value,
  async (value: Array<number>) => {
    sliderValue.value = value;
  },
);

const onSlideEnd = () => {
  emit('update:value', sliderValue)
}

const emit = defineEmits(['update:value']);
</script>