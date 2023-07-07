<template>
    <button class="btn btn-danger me-3" v-if="mascota && mascota.extraviado=='no'" @click="marcarExtraviada">Extraviada!</button>
    <button class="btn btn-success me-3" v-if="mascota && mascota.extraviado=='si'" @click="encontrada">Encontrada!</button>
</template>

<script>
export default {
    props:{
        mascota:{}
    },
    methods:{
        marcarExtraviada(){
            console.log(this.mascota.nombre + ' extraviada')
        },
        encontrada(){
            console.log(this.mascota.nombre + ' encontrada')
        }
    }
}
</script>

<style>

</style>