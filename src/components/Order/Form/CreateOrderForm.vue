<template>
  <Form>
    <div class="flex flex-wrap">
      <div class="flex-column col-12 lg:col-6">
        <InputText label="Name" v-model:value="formData.fullName" :error="errors?.fullName"/>
        <InputText class="mt-2" label="Email" v-model:value="formData.email" :error="errors?.email"/>
        <DatePicker class="mt-2" label="Birthdate" v-model:value="formData.birthDate" :error="errors?.birthDate"/>
        <CountrySelect class="mt-2" v-model:value="formData.country" :error="errors?.country"/>
        <InputText class="mt-2" label="Address" v-model:value="formData.address" :error="errors?.address"/>

        <Divider align="left" type="solid">
          <b>Payment Information</b>
        </Divider>

        <Card class="bg-primary-400" :pt="{content:{class: 'p-0'}}">
          <template #content>
            <InputMask label="Card Number" v-model:value="formData.card.cardNumber" placeholder="0000 0000 0000 0000" mask="9999 9999 9999 9999" :error="errors['card.cardNumber']"/>
            <div class="flex flex-row col-6 gap-2 justify-content-between p-0">
              <div class="col-2 w-full px-0">
                <InputMask class="p-0" label="Expired date" v-model:value="formData.card.cardExpiredAt" placeholder="12/31" mask="99/99" :error="errors['card.cardExpiredAt']"/>
              </div>
              <div class="col-2 w-full">
                <InputMask class="p-0" label="CVV/CVC" v-model:value="formData.card.cardCode" placeholder="000" mask="999" :error="errors['card.cardCode']"/>
              </div>
            </div>
          </template>
        </Card>
        <Checkbox class="mt-3" label="I agree with service terms" v-model:value="formData.isAgreed" :error="errors?.isAgreed"/>
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
import {Form, RawFormSchema, validateObject} from "vee-validate";
import InputText from "../../common/Input/InputText.vue";
import DatePicker from "../../common/Input/DatePicker.vue";
import CountrySelect from "../../common/ModelInput/CountrySelect.vue";
import Checkbox from "../../common/Input/Checkbox.vue";
import ProductPreview from "../../Product/Catalog/ProductPreview.vue";
import Divider from 'primevue/divider';
import InputMask from "../../common/Input/InputMask.vue";
import Card from "primevue/card";
import * as yup from "yup";
import {OrderService} from "../../../services/OrderService.ts";

interface Props {
    product: Product,
}

defineProps<Props>();

const formData: Ref<Order> = ref<Order>({
  fullName: '',
  email: '',
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

const validationSchema: RawFormSchema<Order> = {
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  birthDate: yup.date().required(),
  country: yup.string().required(),
  address: yup.string().required(),
  isAgreed: yup.boolean().isTrue().required(),
  card: yup.object().required(),
  "card.cardNumber": yup.string().matches(new RegExp('^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$'), 'Invalid card number').required(),
  "card.cardCode": yup.string().matches(new RegExp('^[0-9]{3}$'), 'Invalid security code').required(),
  "card.cardExpiredAt": yup.string().matches(new RegExp('^0[1-9]|^1[0-2]/[2-9][0-9]$'), 'Invalid date').required(),
}

const errors: Ref<Partial<Record<string, string>>> = ref({});
const orderService = new OrderService();

const submit = async () => {
  await validateObject(validationSchema, formData.value).then(async result => {
    if (result.valid) {
      if (await orderService.storeOrder(formData.value) === 200) {
        emit('submitted');
      }
    }

    errors.value = result.errors;
  });
}

defineExpose({ submit });
const emit = defineEmits(['submitted']);
</script>