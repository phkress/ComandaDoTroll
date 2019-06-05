<template>
    <div id="Boqueta">
        <my-titulo titulo="Pedidos"></my-titulo>
    </div>
</template>
<script>
import Titulo from '../shared/titulo/Titulo.vue';
export default {
    name: "Boqueta",
    components: {
        'my-titulo' : Titulo,
    },
    data: () => ({

    }),
}
</script>
<style scoped>

</style>
