<template>
  <div class="container-fluid py-5">
        <div class="container-md p-5 rounded-4" id="login_container">
            <div class="row-cols-1 row">
                <div class="col mb-4 d-flex justify-content-center">
                    <div class="fs-2 fw-semibold">Registrarce</div>
                </div>
                <div class="col mb-4 d-flex justify-content-center">
                    <img src="..\img\in.png" alt="" id="login_icon">
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatinguUser" placeholder="Nombre de usuario" v-model="formulario.name">
                        <label for="floatinguUser">Nombre de usuario</label>
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
                        <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Contraseña" v-model="confirmarPassword">
                        <label for="floatingPasswordConfirm">Confirmar contraseña</label>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary px-4 fw-bold" @click="enviarFormulario"> Registrarce</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="toast-container position-fixed top-0 start-0 p-3">
        <div class="toast t-o s-0" role="alert" aria-live="assertive" aria-atomic="true" id="toast">
        <div class="toast-header">
            <strong class="me-auto">Find Your pet!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            La contraseñas son incorrectas!
        </div>
    </div>
    </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap';
//import axios from "axios";
export default {
    name: "UserRegistro",
    data(){
        return{
            formulario:{
                name: null,
                email: null,
                password: null,
            },
            confirmarPassword:null
        }
    },
    methods:{
        async enviarFormulario(){
            if(!this.samePassword()){
                this.desplegarToast(); 
            }
            else{
                console.log("send")
                /* let respuesta = await axios.post("http://localhost:3001/auth/register", this.formulario)
                respuesta = respuesta.data; */
            }
        },
        desplegarToast(){
            const toast = new bootstrap.Toast(document.getElementById("toast"));
            toast.show();
            
        },
        samePassword(){
            return this.formulario.password==this.confirmarPassword;
        }
    }
}
</script>

<style>

</style>