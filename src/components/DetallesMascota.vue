<template>
  <div class="container-fluid p-5" id="xd">
    <div class="row" v-if="mascota">
        <div class="col-md-3 col-12">
            <img :src="mascota.fotos[0]" class="w-100 rounded-4 mb-2" alt="gatos">
            <img :src="mascota.fotos[0]" class="w-100 rounded-4 mb-2" alt="gatos">
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
  <div class="container-fluid">
    <div class="row row-cols-1 p-5">
        <div class="col d-flex justify-content-center">
            <button class="btn btn-success">Quiero adoptarlo</button>
        </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
    name: "DetallesMascota",
    data(){
        return{
            mascota: null
        }
    },
    methods:{
        llamarMascota(){
            //axios.get()
            this.mascota={
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
        }
    },
    mounted(){
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
</style>