<template>
  <Form>
    <div class="flex flex-wrap">
      <div class="flex-column col-12 lg:col-6">
        <InputText label="Name" v-model:value="formData.fullName" />
        <DatePicker class="mt-2" label="Birthdate" v-model:value="formData.birthDate" />
        <CountrySelect class="mt-2" v-model:value="formData.country" />
        <InputText class="mt-2" label="Address" v-model:value="formData.address" />

        <Divider align="left" type="solid">
          <b>Payment Information</b>
        </Divider>

        <Card class="bg-primary-400" :pt="{content:{class: 'p-0'}}">
          <template #content>
            <InputMask label="Card Number" v-model:value="formData.card.cardNumber" placeholder="0000 0000 0000 0000" mask="9999 9999 9999 9999"/>
            <div class="flex flex-row col-6 gap-2 justify-content-between p-0">
              <div class="col-2 w-full px-0">
                <InputMask class="p-0" label="Expired date" v-model:value="formData.card.cardExpiredAt" placeholder="12/31" mask="99/99"/>
              </div>
              <div class="col-2 w-full">
                <InputMask class="p-0" label="CVV/CVC" v-model:value="formData.card.cardCode" placeholder="000" mask="999"/>
              </div>
            </div>
          </template>
        </Card>
        <Checkbox class="mt-3" label="I agree with service terms" v-model:value="formData.isAgreed"/>
      </div>
      <div class="flex-column col-12 lg:col-6">
        <div>
          <ProductPreview :product="product" />
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {Form} from "vee-validate";
import InputText from "../../common/Input/InputText.vue";
import DatePicker from "../../common/Input/DatePicker.vue";
import CountrySelect from "../../common/ModelInput/CountrySelect.vue";
import Checkbox from "../../common/Input/Checkbox.vue";
import ProductPreview from "../../Product/Catalog/ProductPreview.vue";
import Divider from 'primevue/divider';
import InputMask from "../../common/Input/InputMask.vue";
import Card from "primevue/card";

interface Props {
    product: Product,
}

defineProps<Props>();

const formData: Ref<Order> = ref<Order>({
  fullName: '',
  birthDate: new Date(),
  country: '',
  address: '',
  isAgreed: false,
  card: {
    cardNumber: '',
    cardExpiredAt: '',
    cardCode: 0,
  },
});

defineExpose({formData});
</script>

<style scoped>

</style>