<script setup lang="ts">
import ProductListItem from "./ProductListItem.vue";
import DataView from "primevue/dataview";

interface Props {
  products: Array<Product>,
}

defineProps<Props>();
</script>

<template>
  <DataView :value="products" layout="grid">
    <template #grid="slotProps">
      <div class="grid grid-nogutter">
        <div v-for="(product, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
          <product-list-item :product="product"/>
        </div>
      </div>
    </template>
  </DataView>
</template>