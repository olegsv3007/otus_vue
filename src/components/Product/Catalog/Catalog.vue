<template>
  <div class="m-5 grid">
    <SearchLine :is-loading="isLoading" @search="search" class="col-12"/>
    <Filters :filter="filter" :price-range="priceRange" class="col-3 mt-2" @update="updateFilter" @clear="clearFilter"/>
    <ProductList :products="products" :is-loading="isLoading" class="col-9"/>
    <FormModalComponent header="Create Product" form="../Product/Form/CreateProductForm.vue" success-message="Product has been created">
      <template #modal-initiator="{ showModal }">
        <Button class="create_product_button fixed left-0 bottom-0 m-5" icon="pi pi-plus" rounded @click="showModal"/>
      </template>
    </FormModalComponent>
  </div>
</template>

<script setup lang="ts">
import ProductList from "./ProductList.vue";
import SearchLine from "./SearchLine.vue";
import Button from "primevue/button";
import {onMounted, ref} from "vue";
import {ProductService} from "../../../services/ProductService.ts";
import Filters from "./Filters.vue";
import FormModalComponent from "../../common/FormModalComponent.vue";

const productService = new ProductService();
const products = ref<Array<Product>>([]);
const isLoading = ref<boolean>(false);
const priceRange = ref<number[]>([0, 0])
const filter = ref<Filter>({
  query: '',
  price: [0, 0],
});

onMounted(async function () {
  isLoading.value = true;
  products.value = await productService.fetchProducts();
  isLoading.value = false;
  priceRange.value = await productService.getPriceRange('')
  filter.value.price = priceRange.value;
});

const search = async (searchQuery: string) => {
  isLoading.value = true;
  products.value = await productService.searchProducts(searchQuery)
  isLoading.value = false;

  filter.value.query = searchQuery;
  priceRange.value = await productService.getPriceRange(searchQuery)
  filter.value.price = priceRange.value;
}

const clearFilter = async () => {
  filter.value.price = priceRange.value;
  products.value = await productService.applyFilter(filter.value);
}

const updateFilter = async (key: string, value: any) => {
  filter.value[key] = value;
  products.value = await productService.applyFilter(filter.value);
}
</script>