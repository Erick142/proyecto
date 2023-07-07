<template>
    <div class="container pb-4">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Perfil de Usuario</h1>
          <div class="container text-center">
    <div class="d-flex justify-content-center align-items-center mt-5 pb-4">
      <img src="https://media.istockphoto.com/id/1193046540/vector/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-background-no-website.jpg?s=612x612&w=0&k=20&c=4wx1UzigP0g9vJv9D_DmOxdAT_DtX5peZdoS4hi2Fqg=" alt="Imagen de usuario" class="rounded-circle img-medium border border-success" />
    </div>
  </div>
  <div class="card pb-4 border-0">
  <div class="card-body text-center">
    <h5 class="card-title">Datos del usuario</h5>
    <p class="card-text">{{ usuario.nombre }} {{ usuario.apPaterno }} {{ usuario.apMaterno }}</p>
    <p class="card-text">{{ usuario.email }}</p>
  </div>
</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  
  
  export default {
    name: 'PerfilUsuario',
    data() {
      return {
        usuario:{},
        nombre:"",
        apPaterno:"",
        apMaterno:""
      };
    },
    methods: {
      async cargarUsuario() {
        try {
          const respuesta = await axios.get(`http://localhost:3001/usuarios/${this.$route.params.idUsuario}`);
          //this.usuario = respuesta.data;
          console.log("usuario")
          this.usuario=respuesta.data.usuario
          console.log(respuesta.data.usuario);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async created() {
      await this.cargarUsuario();
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 40px;
  }

  .img-medium {
  width: 150px;
  height: 150px;
}
  </style>