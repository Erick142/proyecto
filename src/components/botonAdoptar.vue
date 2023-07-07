<template>
  <button class="btn btn-primary me-3" v-if="mascota" @click="adoptar">Adoptar</button>
</template>

<script>
export default {
    props:{
        mascota:{}
    },
    methods:{
        adoptar(){
            console.log(this.mascota.nombre + ' es adoptada')
        }
    }
}
</script>

<style>

</style>