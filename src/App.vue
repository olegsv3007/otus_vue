<script setup lang="ts">
import ProductList from "./components/ProductList.vue";
import products from '../resources/products.json'
</script>

<template>
  <ProductList :products="products"/>
</template>
