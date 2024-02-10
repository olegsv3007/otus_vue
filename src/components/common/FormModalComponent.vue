<template>
  <div>
    <Dialog v-model:visible="visible" :header="header" modal :style="{width: '50rem'}" :breakpoints="{'1199px': '75vw', '575px': '90vw'}">
      <component ref="formRef" :is="FormComponent" v-bind="formProps"/>
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
import {defineAsyncComponent, Ref, ref} from "vue";

const FormComponent = defineAsyncComponent(() => import( /* @vite-ignore */ props.form));

interface Props {
  header: string,
  method?: string,
  url: string,
  form: string,
  formProps?: object,
}

const props = withDefaults(defineProps<Props>(), {method: 'POST'});

let visible: Ref<boolean> = ref(false);
let formRef: Ref<null | InstanceType<typeof Element>> = ref(null);

const showModal = (): void => {
  visible.value = true;
};
const closeModal = (): void => {
  visible.value = false;
};
const submit = (): void => {
  //@todo send form to server
  console.log(formRef.value?.formData ?? null);
  closeModal();
};
</script>