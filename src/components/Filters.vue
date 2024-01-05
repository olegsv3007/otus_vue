<template>
  <Panel header="Filters">
    <template #icons>
      <button class="p-panel-header-icon p-link mr-2" @click="">
        <span class="pi pi-filter-slash"></span>
      </button>
    </template>
    <RangeSlider
        title="Price"
        :min="priceRange[0]"
        :max="priceRange[1]"
        v-model:value="filter.price"
        @update="(value: number[]) => $emit('update', 'price', value)"
    />
  </Panel>
</template>

<script setup lang="ts">
import Panel from "primevue/panel";
import RangeSlider from "./RangeSlider.vue";

interface Props {
  filter: Filter,
  priceRange: number[],
}

defineProps<Props>();
defineEmits(['update']);
</script>

<style scoped>

</style>