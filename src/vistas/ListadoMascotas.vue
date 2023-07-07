<template>
  <div class="container-md">
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
                                <option value="">Extriaviado</option>
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
            <div class="row row-cols-1 g-2" v-if="mascotas">
                <div class="col" v-for="mascota in mascotasFiltradas" :key="mascota.id" >
                    <div class="card">
                        <div class="row">
                            <div class="col-4 d-flex align-items-center">
                                <img :src="mascota.fotos[0]" class="mascota-img" alt="...">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ mascota.nombre }}</h5>
                                    <p class="card-text"> {{ mascota.descripcion }} </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Sexo: {{ mascota.sexo }} </li>
                                    <li class="list-group-item">Edad: {{mascota.edad}} meses</li>
                                    <li class="list-group-item">especie: {{mascota.especie}} </li>
                                    <li class="list-group-item">en adopcion: {{mascota.adopcion}} </li>
                                    <li class="list-group-item">extraviado: {{mascota.extraviado}} </li>
                                </ul>
                                <div class="card-body">
                                    <botonAdoptarVue :mascota="mascota" v-if="mascota.adopcion=='si'"/>
                                    <botonExtrabiadoVue :mascota="mascota"/>
                                    <button class="btn btn-success  ">Contactar dueño</button>
                                </div>
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
import botonExtrabiadoVue from '@/components/botonExtrabiado.vue'
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
        botonExtrabiadoVue
    },
    methods:{
        cargarMascotas(){
            this.mascotas=[
                {
                    id:1,
                    nombre: "Sr pelusa",
                    edad: 8,
                    sexo: "Macho",
                    especie: "gato",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://farm2.staticflickr.com/1919/45579541712_f58c1fd0ed_o.jpg"],
                    adopcion: "si",
                    extraviado: "no",
                    nChip:"12323"
                },
                {
                    id:2,
                    nombre: "Sra pelusa",
                    edad: 8,
                    sexo: "Hembra",
                    especie: "gato",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://www.recreoviral.com/wp-content/uploads/2016/11/GATOS-HERMOSOS4.jpg"],
                    adopcion: "no",
                    extraviado: "no",
                    nChip:"12323"
                },
                {
                    id:3,
                    nombre: "Sr copito",
                    edad: 2,
                    sexo: "Macho",
                    especie: "perro",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://th.bing.com/th/id/OIP.GClVM1YWXc9uQCg1fyjKOAHaHc?pid=ImgDet&rs=1"],
                    adopcion: "no",
                    extraviado: "no",
                    nChip:"12323"
                },
                {
                    id:4,
                    nombre: "Sra copito",
                    edad: 3,
                    sexo: "Hembra",
                    especie: "perro",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://http2.mlstatic.com/husky-siberiano-cachorros-huskys-siberianos-D_NQ_NP_731352-MLM40154638212_122019-F.jpg"],
                    adopcion: "si",
                    extraviado: "si",
                    nChip:"12323"
                },
                {
                    id:5,
                    nombre: "gorduras",
                    edad: 5,
                    sexo: "Hembra",
                    especie: "gato",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://lh5.ggpht.com/_-4wZchZlPgw/S8DVDk-KlaI/AAAAAAAABE4/Qi3fs4yYXaY/fat_cats_15_thumb.jpg?imgmax=800"],
                    adopcion: "si",
                    extraviado: "no",
                    nChip:"12323"
                },
                {
                    id:6,
                    nombre: "Capitan",
                    edad: 12,
                    sexo: "macho",
                    especie: "gato",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://i0.wp.com/worldcatcomedy.com/wp-content/uploads/2019/12/maxresdefault-62.jpg?fit=1200%2C675&ssl=1"],
                    adopcion: "no",
                    extraviado: "si",
                    nChip:"12323"
                },
                {
                    id:7,
                    nombre: "Sonrisas",
                    edad: 20,
                    sexo: "Hembra",
                    especie: "perro",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://i.pinimg.com/originals/3a/ca/48/3aca488058341fcd5fb727864fe5ebf5.jpg"],
                    adopcion: "si",
                    extraviado: "no",
                    nChip:"12323"
                },
                {
                    id:8,
                    nombre: "Firulais",
                    edad: 10,
                    sexo: "macho",
                    especie: "perro",
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt provident dolore, doloremque quisquam nihil ipsam adipisci et dolores numquam illum aspernatur similique pariatur cumque labore laudantium molestias neque qui. Quo magnam nihil culpa eos. Quisquam, itaque voluptate recusandae iste voluptatibus animi. Officia enim quos quibusdam itaque aliquam, deserunt tempore ad culpa nulla, nesciunt facere. Ab eaque eum asperiores nisi.',
                    fotos: ["https://yt3.ggpht.com/a-/AN66SAxGoz0gtEwAK-U-l6nGNlv2gyR6NyoGcnXyYw=s900-mo-c-c0xffffffff-rj-k-no"],
                    adopcion: "no",
                    extraviado: "si",
                    nChip:"12323"
                }
            ]
        }
    },
    mounted(){
        this.cargarMascotas();
    },
    computed:{
        mascotasFiltradas() {
            return this.mascotas.filter(mascota => {
                if (this.filtroEspecie!="") {
                    if(mascota.especie!=this.filtroEspecie){
                        return false;
                    }
                }
                if (this.filtroExtraviado!="") {
                    if(mascota.extraviado!=this.filtroExtraviado){
                        return false;
                    }
                }
                if (this.filtroAdopcion!="") {
                    if(mascota.adopcion!=this.filtroAdopcion){
                        return false;
                    }
                }
                if(this.filtroEdad!=0){
                    if(mascota.edad!=this.filtroEdad){
                        return false;
                    }
                }
                return true;
            });
        }
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