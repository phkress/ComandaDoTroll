<template>
  <div id="Mesas">
      <b-container fluid>
        <lista-mesas
          :lmesas='mesas'
          @mesaSelecionada="choseMesa"
          v-show="listaDeMesas"
        ></lista-mesas>

      </b-container>
  </div>
</template>
<script>
import ListaMesas from '../shared/listaMesas/ListaMesas.vue';
export default {
    name: "Mesa",
    components:{
      "lista-mesas" : ListaMesas,
    },
    data: () => ({
      mesas: [{numeroDaMesa:1,pendentes:0,pedidos:1},{numeroDaMesa:2,pendentes:2,pedidos:2},{numeroDaMesa:3,pendentes:1,pedidos:1}],
      listaDeMesas: true,
      pedido: false,
      inMemory: null,
    }),
    methods: {
      choseMesa(data) {
        this.inMemory= data;
        this.listaDeMesas = false;
        this.pedido = true;
      },
    }
}
</script>
<style scoped>

</style>
