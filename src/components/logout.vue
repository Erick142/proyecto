<template>
  <li>
    <router-link class="dropdown-item" :to="''" @click="cerrarSesion">Cerrar sesión</router-link>
  </li>
</template>


<script>
import router from '@/router.js';
import axios from 'axios';

export default {
  name: "botonLogout",
  data() {
    return {};
  },
  methods: {
    async cerrarSesion() {
      try {
        await axios.post("http://localhost:3001/auth/logout");
        localStorage.removeItem("token");
        router.push("/home");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>

</style>