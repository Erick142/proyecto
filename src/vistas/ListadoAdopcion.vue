<template>
    <div class="container-md" v-if="mascotas">
        <div class="row">
            <div class="col-12 my-3">
                <div class="row justify-content-between">
                    <div class="col-3 d-flex align-items-center">
                        <h3>Listado de mascotas en adopción</h3>
                    </div>
                    <div class="col-9">
                        <div class="row justify-content-end">
                            <div class="col-2">
                                <select class="form-select form-select-lg h-100 small-text" v-model="filtroEspecie">
                                    <option value="">Especie</option>
                                    <option value="gato">gato</option>
                                    <option value="perro">perro</option>
                                </select>
                            </div>
                            <div class="col-5">
                                <div class="form-floating">
                                    <input v-model="filtroEdad" type="number" min="0" class="form-control" id="floatingAge"
                                        placeholder="edad de tu mascota en meses" />
                                    <label for="floatingAge">edad de la mascota en meses</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row row-cols-1 g-2">
                    <div class="col" v-for="mascota in mascotas" :key="mascota.id">
                        <div class="card">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center" v-if="mascota.fotos">
                                    <img :src="mascota.fotos && mascota.fotos.length > 0 ? `data:image/png;base64,${mascota.fotos[0]}` : imagenPorDefecto" class="mascota-img" alt="...">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                            <h5 class="card-title">{{ mascota.nombre }}</h5>
                                        
                                        <p class="card-text">{{ mascota.descripcion }}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Sexo: {{ mascota.sexo }}</li>
                                        <li class="list-group-item">Edad: {{ mascota.edad }} meses</li>
                                        <li class="list-group-item">Especie: {{ mascota.especie }}</li>
                                    </ul>
                                    <div class="card-body">
                                        <botonAdoptarVue />
                                        <button class="btn btn-success" @click="contactarDuenio">Contactar dueño</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" v-if="mostrarModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <p>Se ha enviado un mensaje al dueño</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            @click="mostrarModal = false">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import botonAdoptarVue from '@/components/botonAdoptar.vue'
import axios from 'axios'

export default {
    name: "ListadoMascota",
    data() {
        return {
            mascotas:[],
            filtroEdad: 0,
            filtroEspecie: "",
            mostrarModal: false,
            imagenPorDefecto:"https://media.istockphoto.com/id/1193046540/vector/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-background-no-website.jpg?s=612x612&w=0&k=20&c=4wx1UzigP0g9vJv9D_DmOxdAT_DtX5peZdoS4hi2Fqg="

        }
    },
    components: {
        botonAdoptarVue
    },
    methods: {
        async cargarMascotas() {
            let respuesta = await axios.get("http://localhost:3001/adopcion/listado")
            this.mascotas = respuesta.data
            console.log(this.mascotas)
        },
        contactarDuenio() {
            this.mostrarModal = true
        }
    },
    mounted() {
        this.cargarMascotas()
    }
}
</script>
  
<style>
.small-text {
    font-size: 16px;
}

.mascota-img {
    object-fit: cover;
    width: 100%;
    height: 350px;
}
</style>