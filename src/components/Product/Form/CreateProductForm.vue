<template>
  <Form>
    <InputText label="Title" :value="formData.title" @update="(value: string) => formData.title = value"/>
    <InputCurrency class="mt-2" label="Price" :value="formData.price" @update="(value: number) => formData.price = value"/>
    <Editor class="mt-2" label="Description" :value="formData.description" @update="(value: string) => formData.description = value"/>
    <Dropdown class="mt-2" label="Select a category" :value="formData.category" :options="categories" @update="(value: string) => formData.category = value"/>
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