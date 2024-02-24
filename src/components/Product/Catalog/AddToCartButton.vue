<template>
  <Button icon="pi pi-shopping-cart" rounded @click.stop="addToCart"></Button>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import {CartService} from "../../../services/CartService.ts";

interface IProps {
  product: Product,
}

const props = defineProps<IProps>();
const cartService = new CartService();

const addToCart = () => cartService.addProduct(props.product);
</script>