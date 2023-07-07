<template>
  <div class="container-fluid p-5" id="xd">
    <div class="row" v-if="mascota">
        <div class="col-md-3 col-12">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <template v-for="(foto, index) in mascota.fotos" :key="index">
                        <div class="carousel-item active" v-if="index==0">
                            <div class="imagen-container">
                                <img :src="`data:image/png;base64,${foto}`" class="foto-mascota" alt="...">
                            </div>
                        </div>
                        <div class="carousel-item" v-else>
                            <div class="imagen-container">
                                <img :src="`data:image/png;base64,${foto}`" class="foto-mascota" alt="...">
                            </div>
                        </div>
                    </template>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-md-9 col-12" >
            <div class="row row-cols-1">
                <div class="col">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h1> {{mascota.nombre}} </h1>
                        </div>
                        <div class="col-4 ">
                            <div class="row">
                                <div class="col-auto">
                                    <img src="../img/heart.png" class="icon-m" alt="heart">
                                </div>
                                <div class="col-auto">
                                    <img src="../img/finish.png" class="icon-m" alt="help">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mt-5">
                    <div class="row-cols-1 row">
                        <div class="col">
                            <div class="row">
                                <div class="col-4">
                                    <h5>Edad: {{mascota.edad}} meses</h5>
                                </div>
                                <div class="col-4">
                                    <h5>Sexo: {{mascota.sexo}}</h5>
                                </div>
                                <div class="col-4">
                                    <h5>Especie: {{mascota.especie}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h3>Descripcion</h3>
                        </div>
                        <div class="col">
                            <p> {{mascota.descripcion}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="container-fluid" v-if="mascota">
    <div class="row row-cols-1 p-5">
        <div class="col d-flex justify-content-center" v-if="mascota.adopcion=='si'">
            <button class="btn btn-success mb-3">Quiero adoptarlo</button>
        </div>
        <div class="col d-flex justify-content-center" v-if="mascota.extraviada=='si'">
            <button class="btn btn-danger">Lo encontre</button>
        </div>
        <div class="col d-flex justify-content-center">
            <router-link :to="`/mascota/eliminar/${mascota._id}`"><button class="btn btn-danger">eliminar mascota</button> </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "DetallesMascota",
    data(){
        return{
            mascota: null,
            id:null
        }
    },
    methods:{
        async llamarMascota(){
            let respuesta = await axios.get(`http://localhost:3001/mascota/${this.id}`)
            respuesta = respuesta.data;
            console.log(respuesta)
            this.mascota= respuesta.mascota;
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.llamarMascota();
    }
}
</script>

<style>
#xd{
    background-color: rgb(231, 231, 231);
}
.icon-m{
    width: 30px;
    height: auto;
}
.imagen-container{
	width: 100%;
	height: 0;
	padding-top: 100%;
	position: relative;
}
.foto-mascota{
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
}
</style>