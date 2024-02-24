<template>
  <Menubar :model="menuItems" class="h-4rem nav">
    <template #item="{ item, props }">
      <router-link v-slot="{ href, navigate }" :to="{name: item.route}" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
    <template #end>
      <div class="flex">
        <CartBadge />
        <router-link v-if="!currentUser" v-slot="{ navigate }" :to="{name: 'login'}" custom>
          <Button @click="navigate" class="p-button p-button-sm ml-2" label="Login" icon="pi pi-sign-in"/>
        </router-link>
        <div class="flex align-items-center">
          <Button class="p-button p-button-sm text-xs ml-2" v-if="currentUser" @click="logout" icon="pi pi-sign-out" :label="`Logout (${currentUser})`"/>
        </div>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar";
import {LoginService} from "../../../services/LoginService.ts";
import {onMounted, Ref, ref} from "vue";
import {useRouter} from "vue-router";
import Button from "primevue/button";
import CartBadge from "../../Cart/CartBadge.vue";

const loginService = new LoginService();
const currentUser: Ref<string|null> = ref<string|null>(null);
const router = useRouter();

onMounted(() => {
  currentUser.value = loginService.getAuthenticatedUser();
});

const menuItems = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: 'home',
  },
];

router.afterEach((to, from, failure): void => {
  if (from.name === 'login') {
    currentUser.value = loginService.getAuthenticatedUser();
  }
})

const logout = () => {
  loginService.logout();
  currentUser.value = null;
}
</script>

<style scoped>
.nav{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1100;
}
</style>