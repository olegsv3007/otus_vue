<template>
  <div class="m-5">
    <SearchLine :is-loading="isLoading" @search="search"/>
    <ProductList :products="products" :is-loading="isLoading" />
  </div>
</template>

<script setup lang="ts">
import ProductList from "./ProductList.vue";
import SearchLine from "./SearchLine.vue";

import {onMounted, ref} from "vue";
import {ProductService} from "../services/ProductService.ts";

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