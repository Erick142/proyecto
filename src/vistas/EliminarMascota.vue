<template>
    <div class="container-sm" v-if="mascota">
        <div class="row my-3">
            <div class="col-12 text-center my-3">
                <h2>Eliminar mascota</h2>
            </div>
            <div class="col-12">
                <div class="mx-md-5">
                    <div class="mx-md-5">
                        <div class="mx-md-5">
                            <div class="mx-lg-5">   
                                <div class="mx-lg-5">
                                    <div class="mx-xl-5">
                                        <div class="mx-xl-5">
                                            <div class="mx-xxl-5">
                                                <div class="mx-xxl-5">
                                                    <div class="card text-center">
                                                        <img :src="`data:image/png;base64,${mascota.fotos[0]}`" class="card-img-top" alt="..." v-if="mascota.fotos">
                                                        <div class="card-body">
                                                            <h5 class="card-title"> {{ mascota.nombre }} </h5>
                                                            <p class="card-text" style="height:120px; overflow:auto"> {{ mascota.descripcion }} </p>
                                                            <button class="btn btn-danger" @click="showModal()"> {{`Eliminar a ${mascota.nombre}`}} </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!---- modal-->
    <div v-if="mascota" class="modal fade" id="eliminarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal de eliminacion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {{ `¿Estas seguro que deseas eliminar a ${mascota.nombre}?` }}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" @click="eliminar"> {{`¡Eliminar a ${mascota.nombre}!`}} </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import router from '@/router'
export default {
    data(){
        return{
            mascota:{},
            id:null
        }
    },
    methods:{
        async buscarMascota(){
            let respuesta = await axios.get(`http://localhost:3001/mascota/${this.id}`)
            respuesta= respuesta.data;
            console.log(respuesta)
            this.mascota=respuesta.mascota;
        },
        showModal(){
            const modalElement=document.getElementById("eliminarModal");
            const modal= new bootstrap.Modal(modalElement);
            modal.show();
        },
        async eliminar(){
            try{
                await axios.delete(`http://localhost:3001/mascota/eliminar/${this.mascota._id}`);

                const modalElement=document.getElementById("eliminarModal");
                const modal= new bootstrap.Modal(modalElement);
                modal.hide();
                router.push("/home")
            }catch(e){
                console.log(e);
            }
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.buscarMascota();
    }
}
</script>

<style scoped>
.img{
    height: 100%;
    width: 100%;
}
</style>