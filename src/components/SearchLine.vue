<template>
 <div class="flex w-full">
  <span class="p-input-icon-left w-full block m-2">
      <i class="pi pi-search" />
      <InputText class="w-full" v-model="searchQuery" placeholder="Search" />
  </span>
   <Button
       type="button"
       class="m-2"
       label="Search"
       icon="pi pi-search"
       :loading="isLoading"
       @click="$emit('search', searchQuery)"
   />
 </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";

interface Props {
  isLoading: boolean,
}

defineProps<Props>();

const searchQuery = '';
</script>