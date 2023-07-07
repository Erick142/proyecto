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
                                                            <img :src="mascota.fotos[0]" class="card-img-top" alt="..." v-if="mascota.fotos">
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
                <button type="button" class="btn btn-danger"> {{`¡Eliminar a ${mascota.nombre}!`}} </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
export default {
    data(){
        return{
            mascota:{}
        }
    },
    methods:{
        async buscarMascota(){
            const mascota={
                id:1,
                nombre: "Sr pelusa",
                edad: 3,
                sexo: "Macho",
                especie: "gato",
                fotos: ["https://farm2.staticflickr.com/1919/45579541712_f58c1fd0ed_o.jpg"],
                descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex nulla deleniti consequatur ipsam, quas iusto impedit. Officia laborum, vitae iste necessitatibus aliquam facere neque non odit tenetur iure a.Eaque voluptatibus temporibus repellat repellendus nisi explicabo adipisci sit hic inventore voluptatum quasi perferendis, quaerat eius id ut consequuntur expedita, delectus ab rem officiis, necessitatibus animi. Rem necessitatibus corrupti beatae!Quas repudiandae eos cumque quod omnis nobis ex rerum sed excepturi labore! Temporibus, amet. Temporibus, exercitationem ab repudiandae assumenda ipsa quidem facilis, quo id soluta mollitia sunt inventore enim quas.Optio provident officiis neque quod aut animi assumenda ratione cumque, sapiente adipisci quia repellat iste tempore quae voluptatem dolores maiores veritatis voluptatum nisi blanditiis enim quisquam, tenetur cum? Minima, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a, unde, quod reiciendis aut omnis corrupti nam non nulla quam, commodi provident tempore ad quo sit reprehenderit veniam cum voluptates!",
                nChip:"10123",
                adopcion:false,
                extraviado:false
            }
            this.mascota=await mascota;
        },
        showModal(){
            const modalElement=document.getElementById("eliminarModal");
            const modal= new bootstrap.Modal(modalElement);
            modal.show();
        }
    },
    mounted(){
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