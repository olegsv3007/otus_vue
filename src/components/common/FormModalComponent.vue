<template>
  <div>
    <Dialog v-model:visible="visible" :header="header" modal :style="{width: '50rem'}" :breakpoints="{'1199px': '75vw', '575px': '90vw'}">
      <component ref="formRef" :is="FormComponent" v-bind="formProps" @submitted="onSubmit"/>
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
import { useToast } from 'primevue/usetoast';

const FormComponent = defineAsyncComponent(() => import( /* @vite-ignore */ props.form));

interface Props {
  header: string,
  method?: string,
  form: string,
  formProps?: object,
  successMessage?: string,
}

const props = withDefaults(defineProps<Props>(), {method: 'POST', successMessage: 'Success'});
const toast = useToast();

let visible: Ref<boolean> = ref(false);
let formRef: Ref<null | InstanceType<typeof Element>> = ref(null);

const showModal = (): void => {
  visible.value = true;
};

const closeModal = (): void => {
  visible.value = false;
};

const submit = (): void => {
  formRef?.value?.submit();
};

const onSubmit = () => {
  toast.add({severity: 'success', summary: props.successMessage});
  closeModal();
}
</script>