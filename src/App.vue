<script setup lang="ts">
import ProductList from "./components/ProductList.vue";
import {onBeforeMount, onMounted, ref} from "vue";

const products = ref([]);
const isLoading = ref(true);

const fetchProducts = async function() {
  isLoading.value = true;

  await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => products.value = json)
      .finally(() => setTimeout(() => isLoading.value = false, 1000));
}

onBeforeMount(async () => await fetchProducts())
</script>

<template>
  <ProductList v-if="products.length > 0" :products="products" :is-loading="isLoading"/>
</template>
