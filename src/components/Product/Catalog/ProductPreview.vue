<template>
  <div class="p-4 border-1 surface-border surface-card border-round h-full flex flex-column justify-content-between">
    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
      <div class="flex align-items-center gap-2">
        <i class="pi pi-tag"></i>
        <span class="font-semibold">{{ product.category }}</span>
      </div>
    </div>
    <div class="flex flex-column align-items-center gap-3 py-5">
      <img class="w-9 shadow-2 border-round" :src="product.image" :alt="product.title" />
      <div class="text-2xl font-bold">{{ product.title }}</div>
    </div>
    <div class="flex align-items-center justify-content-between">
      <span class="text-2xl font-semibold">${{ product.price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  product: Product,
}

defineProps<Props>();
</script>