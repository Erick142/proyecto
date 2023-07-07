<template>
  
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

</style>


