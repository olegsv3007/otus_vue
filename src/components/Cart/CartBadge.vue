<template>
  <router-link v-if="cartLineQuantity" v-slot="{ navigate }" :to="{name: 'cart'}" custom>
    <Button @click="navigate" class="p-button p-button-sm text-xs" icon="pi pi-shopping-cart" rounded aria-label="Filter" :badge="cartLineQuantity.toString()"/>
  </router-link>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import {CartService} from "../../services/CartService.ts";
import {inject, onMounted, ref, Ref} from "vue";
import {Emitter} from "mitt";
import {string} from "yup";

const cartService = new CartService();
const cartLineQuantity: Ref<number> = ref<number>(0);
const emitter = inject('emitter') as Emitter<Events>;

onMounted(() => {
  cartLineQuantity.value = cartService.getTotalQuantity();
  emitter.on('cartLinesQuantityChanged', (quantity: number) => cartLineQuantity.value = quantity);
});

</script>

<style scoped>

</style>