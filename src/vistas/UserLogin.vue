<template>
    <div class="container-fluid py-5">
        <div class="container-md p-5 rounded-4" id="login_container">
            <div class="row-cols-1 row">
                <div class="col mb-4 d-flex justify-content-center">
                    <div class="fs-2 fw-semibold">Iniciar sesion</div>
                </div>
                <div class="col mb-4 d-flex justify-content-center">
                    <img src="..\img\in.png" alt="" id="login_icon">
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatinguUser" placeholder="Nombre de usuario" v-model="formulario.email">
                        <label for="floatinguUser">Nombre de usuario</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" v-model="formulario.password">
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="row row-cols-1">
                        <div class="col d-flex justify-content-center">
                            <div class="form-text">No tienes una cuenta? haz click <router-link class="text-danger fw-semibold" :to="'/registro'">aquí!</router-link></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary px-4 fw-bold" @click="enviarFormulario">Ingresar</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
export default {
    name: "UserLogin",
    data(){
        return{
            formulario:{
                email:null,
                password:null
            }
        }
    },
    methods:{
        async enviarFormulario(){
            try{
                let respuesta = await axios.post("http://localhost:3001/auth/login", this.formulario);
                respuesta = respuesta.data;
                localStorage.setItem("token", respuesta.accesToken)
                router.push("/home")
            }catch(e){
                console.log(e)
            }
        }
    }

}
</script>

<style>
#login_container{
    background: #DEDEDE;
}
#login_icon{
    width: 100px;
}
</style>