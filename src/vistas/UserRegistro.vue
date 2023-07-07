<template>
  <div class="container-fluid py-5">
        <div class="container-md p-5 rounded-4" id="login_container">
            <div class="row-cols-1 row">
                <div class="col mb-4 d-flex justify-content-center">
                    <div class="fs-2 fw-semibold">Registrarse</div>
                </div>
                <div class="col mb-4 d-flex justify-content-center">
                    <img src="..\img\in.png" alt="" id="login_icon">
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatinguUser" placeholder="Nombre" v-model="formulario.nombre">
                        <label for="floatinguUser">Nombre</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatinguUser" placeholder="Apellido paterno" v-model="formulario.apPaterno">
                        <label for="floatinguUser">Apellido paterno</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatinguUser" placeholder="Apellido paterno" v-model="formulario.apMaterno">
                        <label for="floatinguUser">Apellido materno</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingEmail" placeholder="Email" v-model="formulario.email">
                        <label for="floatingEmail">Email</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" v-model="formulario.password">
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Contraseña" v-model="formulario.repassword">
                        <label for="floatingPasswordConfirm">Confirmar contraseña</label>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary px-4 fw-bold" @click="enviarFormulario"> Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "UserRegistro",
    data(){
        return{
            formulario:{
                nombre: null,
                apPaterno: null,
                apMaterno: null,
                email: null,
                password: null,
                repassword: null,
            }
        }
    },
    methods:{
        async enviarFormulario(){
            try{
                
                await axios.post("http://localhost:3001/auth/register", this.formulario)
                window.location.href = "/login";
            }catch(e){
                console.log(e)
            }
        }
    }
}
</script>

<style>

</style>