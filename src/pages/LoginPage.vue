<template>
  <div class="container flex justify-content-center align-items-center h-100 surface-50">
    <Card class="m-auto w-30rem">
      <template #title>Login</template>
      <template #content>
        <LoginForm ref="loginForm" @login="onLoginSuccess"/>
      </template>
      <template #footer>
        <Button @click="onLogin" class="w-full justify-content-center">Login</Button>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "../components/User/Form/LoginForm.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import {ref, Ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const loginForm: Ref<null|InstanceType<typeof LoginForm>> = ref(null);

const onLogin = async () => await loginForm?.value?.submit();
const onLoginSuccess = () => router.push({name: 'home'});
</script>

<style scoped>
.container {
  min-height: calc(100vh - 4rem);
}
</style>