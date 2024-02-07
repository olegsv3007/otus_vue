<template>
  <Form>
    <InputText label="Title" v-model:value="formData.title"/>
    <InputCurrency class="mt-2" label="Price" v-model:value="formData.price"/>
    <Editor class="mt-2" label="Description" v-model:value="formData.description"/>
    <Dropdown class="mt-2" label="Select a category" v-model:value="formData.category" :options="categories"/>
    <FileUpload class="mt-2" label="Photo" @update="(value: string) => formData.image = value"/>
  </Form>
</template>

<script setup lang="ts">
import InputText from "../../common/Input/InputText.vue";
import InputCurrency from "../../common/Input/InputCurrency.vue";
import Editor from "../../common/Input/Editor.vue";
import Dropdown from '../../common/Input/Dropdown.vue';
import FileUpload from "../../common/Input/FileUpload.vue";
import {ref, Ref} from "vue";
import {Form} from "vee-validate";

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

const categories: Array<string> = [
  'men\'s clothing',
  'women\'s clothes',
  'jewelery',
  'electronics',
];

defineExpose({ formData });
</script>