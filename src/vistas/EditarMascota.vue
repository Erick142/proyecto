<template>
  <div class="container-fluid px-0" v-if="mascotaUpdate">
        <div class="container-lg my-5 mascota-container rounded-4">
            <div class="row">
                <div class="col-12 d-flex justify-content-center mt-3 mb-4">
                    <div class="row row-cols-1">
                        <div class="col text-center">
                            <h2>
                                Editar Mascota
                            </h2>
                        </div>
                        <div class="col text-center">
                            <div>
                                Editar la informacion de <b>{{mascota.nombre}}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row row-cols-1 px-lg-5">
                        <div class="col mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingName" placeholder="nombre de tu mascota" v-model="mascotaUpdate.nombre" />
                                <label for="floatingName">
                                    nombre de tu mascota
                                </label>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-floating">
                                        <input type="number" min="0" class="form-control" id="floatingAge" placeholder="edad de tu mascota en meses" v-model="mascotaUpdate.edad"/>
                                        <label for="floatingAge">
                                            edad de tu mascota en meses
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <select class="form-select h-100" v-model="mascotaUpdate.sexo">
                                        <option value="Macho" selected v-if="mascota.sexo=='Macho'">Macho</option>
                                        <option value="Macho" v-else>Macho</option>
                                        <option value="Hembra" selected v-if="mascota.sexo=='Hembra'">Hembra</option>
                                        <option value="Hembra" v-else>Hembra</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingespecie" placeholder="especie" v-model="mascotaUpdate.especie"/>
                                <label for="floatingespecie">
                                    especie
                                </label>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="form-floating">
                                <textarea name="descripcion" id="floatingDescripcion" class="form-control" cols="30" rows="10" placeholder="Descripcion" v-model="mascotaUpdate.descripcion"></textarea>
                                <label for="floatingDescripcion">
                                    Descripcion
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row row-cols-1 px-lg-5">
                        <div class="col mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingchip" placeholder="numero de chip" v-model="mascotaUpdate.nChip"/>
                                <label for="floatingchip">
                                    Numero de chip
                                </label>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputImagen">
                                    imagen de tu mascota
                                </label>
                                <input type="file" class="form-control" id="inputImagen" />
                            </div>
                        </div>
                        <div class="col mb-3">
                            <img :src="mascota.fotos[0]" :alt="`mascota-${mascota.nombre}`" class="w-100 rounded-3" v-if="mascota.fotos"/>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-center mb-3">
                    <button type="submit" class="btn btn-primary px-4 fw-semibold" @click="actualizarMascota">
                        agregar mascota
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mascota:{},
            mascotaUpdate:{}
        }
    },
    methods:{
        llamarMascota(){
            //axios.get()
            const mascota={
                id:1,
                nombre: "Sr pelusa",
                edad: 3,
                sexo: "Macho",
                especie: "gato",
                fotos: ["https://farm2.staticflickr.com/1919/45579541712_f58c1fd0ed_o.jpg"],
                descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex nulla deleniti consequatur ipsam, quas iusto impedit. Officia laborum, vitae iste necessitatibus aliquam facere neque non odit tenetur iure a.Eaque voluptatibus temporibus repellat repellendus nisi explicabo adipisci sit hic inventore voluptatum quasi perferendis, quaerat eius id ut consequuntur expedita, delectus ab rem officiis, necessitatibus animi. Rem necessitatibus corrupti beatae!Quas repudiandae eos cumque quod omnis nobis ex rerum sed excepturi labore! Temporibus, amet. Temporibus, exercitationem ab repudiandae assumenda ipsa quidem facilis, quo id soluta mollitia sunt inventore enim quas.Optio provident officiis neque quod aut animi assumenda ratione cumque, sapiente adipisci quia repellat iste tempore quae voluptatem dolores maiores veritatis voluptatum nisi blanditiis enim quisquam, tenetur cum? Minima, ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a, unde, quod reiciendis aut omnis corrupti nam non nulla quam, commodi provident tempore ad quo sit reprehenderit veniam cum voluptates!",
                nChip:"10123",
                adopcion:"no",
                extraviado:"no"
            }
            return mascota;
        },
        actualizarMascota(){
            console.log(this.mascota);
            console.log(this.mascotaUpdate);
        }
    },
    mounted(){
        this.mascota= this.llamarMascota();
        this.mascotaUpdate={...this.mascota};
    }

}
</script>

<style>

</style>