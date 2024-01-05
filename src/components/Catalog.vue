<template>
  <div class="m-5 grid">
    <SearchLine :is-loading="isLoading" @search="search" class="col-12"/>
    <Filters class="col-3 mt-2"/>
    <ProductList :products="products" :is-loading="isLoading" class="col-9"/>
  </div>
</template>

<script setup lang="ts">
import ProductList from "./ProductList.vue";
import SearchLine from "./SearchLine.vue";

import {onMounted, ref} from "vue";
import {ProductService} from "../services/ProductService.ts";
import Filters from "./Filters.vue";

const productService = new ProductService();
const products = ref<Array<Product>>([]);
const isLoading = ref(false);

onMounted(async function () {
  isLoading.value = true;
  products.value = await productService.fetchProducts();
  isLoading.value = false;
});

const search = async (searchQuery: string) => {
  isLoading.value = true;
  products.value = await productService.searchProducts(searchQuery)
  isLoading.value = false;
}
</script>