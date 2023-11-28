<script setup lang="ts">
import ProductList from "./components/ProductList.vue";
import {onMounted, ref} from "vue";

const products = ref([]);

const fetchProducts = async function() {
  await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => products.value = json)
}

onMounted(async () => await fetchProducts())
</script>

<template>
  <ProductList :products="products"/>
</template>
