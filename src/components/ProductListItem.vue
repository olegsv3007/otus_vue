<script setup lang="ts">
import Rating from "primevue/rating";
import Button from "primevue/button";

const product: Product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'men\'s clothing',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
}
</script>

<template>
  <div class="p-4 border-1 surface-border surface-card border-round">
    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
      <div class="flex align-items-center gap-2">
        <i class="pi pi-tag"></i>
        <span class="font-semibold">{{ product.category }}</span>
      </div>
    </div>
    <div class="flex flex-column align-items-center gap-3 py-5">
      <img class="w-9 shadow-2 border-round" :src="product.image" :alt="product.title" />
      <div class="text-2xl font-bold">{{ product.title }}</div>
      <Rating :modelValue="product.rating.rate" readonly :cancel="false"></Rating>
    </div>
    <div class="flex align-items-center justify-content-between">
      <span class="text-2xl font-semibold">${{ product.price }}</span>
      <Button icon="pi pi-shopping-cart" rounded></Button>
    </div>
  </div>
</template>