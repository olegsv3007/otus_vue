<template>
  <div class="m-5">
    <SearchLine />
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
</script>