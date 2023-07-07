<template>
  <div class="container-md" v-if="mascotas">
    <div class="row">
        <div class="col-12 my-3">
            <div class="row justify-content-between">
                <div class="col-3 d-flex align-items-center">
                    <h3>Listado de mascotas</h3>
                </div>
                <div class="col-9">
                    <div class="row justify-content-end">
                        <div class="col-2">
                            <select class="form-select form-select-lg h-100 small-text" v-model="filtroAdopcion">
                                <option value="">En adopcion</option>
                                <option value="si">si</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <select class="form-select form-select-lg h-100 small-text" v-model="filtroExtraviado">
                                <option value="">Extraviado</option>
                                <option value="si">si</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <select class="form-select form-select-lg h-100 small-text" v-model="filtroEspecie">
                                <option value="">Especie</option>
                                <option value="gato">gato</option>
                                <option value="perro">perro</option>
                            </select>
                        </div>
                        <div class="col-5">
                            <div class="form-floating">
                                <input v-model="filtroEdad" type="number" min="0" class="form-control" id="floatingAge" placeholder="edad de tu mascota en meses" />
                                <label for="floatingAge">
                                    edad de tu mascota en meses
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row row-cols-1 g-2">
                <div class="col" v-for="mascota in mascotas" :key="mascota.id" >
                    <div class="card" >
                        <div class="row">
                            <div class="col-4 d-flex align-items-center" v-if="mascota.fotos">
                                <img :src="`data:image/png;base64,${mascota.fotos[0]}`" class="mascota-img" alt="...">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <router-link :to="`/mascota/ver/${mascota._id}`"><h5 class="card-title">{{ mascota.nombre }}</h5></router-link>
                                    <p class="card-text"> {{ mascota.descripcion }} </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Sexo: {{ mascota.sexo }} </li>
                                    <li class="list-group-item">Edad: {{mascota.edad}} meses</li>
                                    <li class="list-group-item">especie: {{mascota.especie}} </li>
                                    <li class="list-group-item">extraviado: {{mascota.extraviado}} </li>
                                </ul>
                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import botonAdoptarVue from '@/components/botonAdoptar.vue'
import botonExtraviadoVue from '@/components/botonExtraviado.vue'
import axios from 'axios'
export default {
    name: "ListadoMascota",
    data(){
        return{
            mascotas:null,
            filtroEdad: 0,
            filtroAdopcion: "",
            filtroExtraviado: "",
            filtroEspecie: ""
        }
    },
    components:{
        botonAdoptarVue,
        botonExtraviadoVue,
    },
    methods:{
        async cargarMascotas(){
            let respuesta = await axios.get("http://localhost:3001/mascota/")
            respuesta = respuesta.data;
            console.log(respuesta)
            this.mascotas = respuesta.mascotas;
        }
    },
    mounted(){
        this.cargarMascotas();
    }
}
</script>

<style>
.small-text{
    font-size: 16px;
}
.mascota-img{
    object-fit: cover;
    width: 100%;
    height: 350px;
}
</style>