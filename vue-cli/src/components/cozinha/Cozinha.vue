<template>
    <div id="Cozinha">
        <my-titulo titulo="Pedidos"></my-titulo>        
        <b-container fluid>
           <b-row>
               <b-col cols="12" class="mx-auto">
                    <b-card-group class="ml-2" deck>               
                        <cozinha-card v-for="index in 20" :key="index"
                            cardTitle="Local de origem do Pedido"
                            cardTitleColor="success"
                        ></cozinha-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import Titulo from '../shared/titulo/Titulo.vue';
import Card from '../shared/card/Card.vue';
export default {
    name: "Cozinha",
    components: {
        'my-titulo' : Titulo,
        'cozinha-card': Card
    },
    data: () => ({

    }),
}
</script>
<style scoped>

</style>
