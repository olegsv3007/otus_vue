<template>
  <ProductDetail v-if="product" :product="product" />
</template>

<script setup lang="ts">
import ProductDetail from "../components/Product/Catalog/ProductDetail.vue";
import {ProductService} from "../services/ProductService.ts";
import {onMounted, Ref, ref} from "vue";

interface Props {
  productId: string,
};

const productService = new ProductService();
const props = defineProps<Props>();
const product: Ref<Product|undefined> = ref<Product|undefined>(undefined);

onMounted(async () => {
  product.value = await productService.getProductById(props.productId);
})
</script>