<template>
  <InputText label="Title" v-model:value="formData.title" :error="errors?.title"/>
  <InputCurrency class="mt-2" label="Price" v-model:value="formData.price" :error="errors?.price"/>
  <Editor class="mt-2" label="Description" v-model:value="formData.description" :error="errors?.description"/>
  <CategorySelect class="mt-2" label="Select a category" v-model:value="formData.category" :error="errors?.category"/>
  <FileUpload class="mt-2" label="Photo" @update="(value: string) => formData.image = value" :error="errors?.image"/>
</template>

<script setup lang="ts">
import InputText from "../../common/Input/InputText.vue";
import InputCurrency from "../../common/Input/InputCurrency.vue";
import Editor from "../../common/Input/Editor.vue";
import FileUpload from "../../common/Input/FileUpload.vue";
import {ref, Ref} from "vue";
import {RawFormSchema, validateObject} from "vee-validate";
import * as yup from "yup";
import CategorySelect from "../../common/ModelInput/CategorySelect.vue";

const formData: Ref<Product> = ref<Product>({
  title: '',
  price: 0.00,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
});

const validationSchema: RawFormSchema<Product> = {
  id: '',
  title: yup.string().required(),
  price: yup.number().min(0.01).required(),
  description: yup.string().required(),
  category: yup.string().required(),
  image: yup.string().url().required(),
  rating: '',
  'rating.rate': '',
  'rating.count': '',
}

const errors: Ref<Partial<Record<string, string>>> = ref({});

const submit = (): void => {
  validateObject(validationSchema, formData.value).then((result) => {
    if (result.valid) {
      emit('closeModal');
    }

    errors.value = result.errors;
  });
}

defineExpose({ submit });
const emit = defineEmits(['closeModal']);
</script>