<template>
  <div>
    <Dialog v-model:visible="visible" :header="header" modal>
      <template #footer>
        <Button label="Cancel" @click="closeModal" severity="secondary"/>
        <Button label="Submit" @click="submit"/>
      </template>
    </Dialog>
    <slot name="modal-initiator" :showModal="showModal"></slot>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import {Ref, ref} from "vue";

interface Props {
  header: string,
}

defineProps<Props>();

let visible: Ref<boolean> = ref(false);

const showModal = (): void => { visible.value = true };
const closeModal = (): void => { visible.value = false };
const submit = (): void => {
  console.log('submit');
  closeModal();
};
</script>

<style scoped>

</style>