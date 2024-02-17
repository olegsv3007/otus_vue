<template>
    <div>
      <InputText label="Login" v-model:value="formData.login" :error="errors?.login"/>
      <InputPassword class="mt-2" label="Password" v-model:value="formData.password" :error="errors?.password"/>
    </div>
</template>

<script setup lang="ts">
import InputText from "../../common/Input/InputText.vue";
import {Ref, ref} from "vue";
import {RawFormSchema, validateObject} from "vee-validate";
import * as yup from "yup";
import {LoginService} from "../../../services/LoginService.ts";
import InputPassword from "../../common/Input/InputPassword.vue";

const formData: Ref<UserLoginData> = ref<UserLoginData>({
  login: '',
  password: '',
})

const validationSchema: RawFormSchema<UserLoginData> = {
  login: yup.string().required(),
  password: yup.string().required(),
}

const errors: Ref<Partial<Record<string, string>>> = ref({});
const loginService: LoginService = new LoginService();

const submit = async () => {
  await validateObject(validationSchema, formData.value).then(async result => {
    if (result.valid) {
      if (await loginService.login(formData.value) === 200) {
        emit('login');
      }
    }

    errors.value = result.errors;
  });
}

defineExpose({ submit });
const emit = defineEmits(['login']);

</script>