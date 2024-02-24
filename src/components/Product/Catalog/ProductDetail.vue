<template>
  <div class="flex m-5">
    <div class="col-4">
      <img class="col-10" :src="product.image" :alt="product.title">
    </div>
    <div class="col-8 flex flex-column ">
      <div class="col-12 flex">
        <Tag icon="pi pi-tag" :value="product.category"></Tag>
      </div>
      <div class="col-12 text-4xl font-semibold">{{ product.title }}</div>
      <div class="flex flex-column justify-content-between align-items-stretch h-full">
        <div class="col-12 text-lg text-900">{{ product.description }}</div>
        <div class="col-12 flex align-items-end justify-content-between">
          <div class="flex align-items-center">
            <AddToCartButton :product="product"/>
            <div class="ml-2 text-4xl font-semibold text-700">${{product.price}}</div>
          </div>
          <Rating :modelValue="product.rating.rate" readonly :cancel="false"></Rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "primevue/tag";
import Rating from "primevue/rating";
import AddToCartButton from "./AddToCartButton.vue";

interface Props {
  product: Product,
}

defineProps<Props>();
</script>

<style scoped>

</style>