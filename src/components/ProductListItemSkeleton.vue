<script setup lang="ts">
import Skeleton from "primevue/skeleton";
</script>

<template>
  <div class="p-4 border-1 surface-border surface-card border-round">
    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
      <Skeleton class="w-6rem border-round h-2rem" />
      <Skeleton class="w-3rem border-round h-1rem" />
    </div>
    <div class="flex flex-column align-items-center gap-3 py-5">
      <Skeleton class="w-9 shadow-2 border-round h-10rem" />
      <Skeleton class="w-8rem border-round h-2rem" />
      <Skeleton class="w-6rem border-round h-1rem" />
    </div>
    <div class="flex align-items-center justify-content-between">
      <Skeleton class="w-4rem border-round h-2rem" />
      <Skeleton shape="circle" class="w-3rem h-3rem" />
    </div>
  </div>
</template>