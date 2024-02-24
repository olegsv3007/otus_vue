<template>
  <router-link v-if="cartLineQuantity" v-slot="{ navigate }" :to="{name: 'cart'}" custom>
    <Button @click="navigate" class="p-button p-button-sm text-xs" icon="pi pi-shopping-cart" rounded aria-label="Filter" :badge="cartLineQuantity"/>
  </router-link>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import {CartService} from "../../services/CartService.ts";
import {onMounted, ref, Ref} from "vue";

const cartService = new CartService();
const cartLineQuantity: Ref<number> = ref(0);

onMounted(() => {
  cartLineQuantity.value = cartService.getNumberOfLines();
});

</script>

<style scoped>

</style>