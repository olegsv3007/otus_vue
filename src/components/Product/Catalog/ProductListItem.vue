<script setup lang="ts">
import Rating from "primevue/rating";
import Button from "primevue/button";
import FormModalComponent from "../../common/FormModalComponent.vue";

interface Props {
  product: Product,
}

defineProps<Props>();
</script>

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
      <Rating :modelValue="product.rating.rate" readonly :cancel="false"></Rating>
    </div>
    <div class="flex align-items-center justify-content-between">
      <span class="text-2xl font-semibold">${{ product.price }}</span>
      <FormModalComponent form="../Order/Form/CreateOrderForm.vue" header="Create Order" :form-props="{product: product}">
        <template #modal-initiator="{ showModal }">
          <Button icon="pi pi-shopping-cart" rounded @click="showModal"></Button>
        </template>
      </FormModalComponent>
    </div>
  </div>
</template>