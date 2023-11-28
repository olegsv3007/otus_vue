<script setup lang="ts">
import ProductListItem from "./ProductListItem.vue";
import DataView from "primevue/dataview";
import ProductListItemSkeleton from "./ProductListItemSkeleton.vue";

interface Props {
  products: Array<Product>,
  isLoading: boolean,
}

defineProps<Props>();
</script>

<template>
  <DataView :value="products" layout="grid">
    <template #grid="slotProps">
      <div class="grid grid-nogutter">
        <div v-if="isLoading" v-for="i in 3" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
          <product-list-item-skeleton />
        </div>
        <div v-else v-for="(product, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
          <product-list-item :product="product"/>
        </div>
      </div>
    </template>
  </DataView>
</template>