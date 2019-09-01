<template>
  <div id="Mesas">
      <b-container fluid>
        <lista-mesas
          :lmesas='mesas'
          @mesaSelecionada="choseMesa"
          v-show="listaDeMesas"
        ></lista-mesas>
        <contador-de-pedidos
          :infoDaMesa='inMemory'
          @cancelaContadorDePedido='cancelaContadorDePedido'
          @novoContadorDePedido='novoContadorDePedido'
          v-show="contadorDePedido"
        ></contador-de-pedidos>
      <novo-pedido
        v-show="novoPedido"
      ></novo-pedido>
      </b-container>
  </div>
</template>
<script>
import ListaMesas from '../shared/listaMesas/ListaMesas.vue';
import ContadorDePedidos from '../shared/contadorDePedidos/ContadorDePedidos.vue';
import NovoPedido from '../shared/novoPedido/NovoPedido.vue';
export default {
    name: "Mesa",
    components:{
      "lista-mesas" : ListaMesas,
      "contador-de-pedidos" : ContadorDePedidos,
      "novo-pedido" : NovoPedido
    },
    data: () => ({
      mesas: [{numeroDaMesa:1,pendentes:0,pedidos:1},{numeroDaMesa:2,pendentes:2,pedidos:2},{numeroDaMesa:3,pendentes:1,pedidos:1}],
      listaDeMesas: true,
      contadorDePedido: false,
      novoPedido: false,
      inMemory: null,
    }),
    methods: {
      choseMesa(data) {
        this.inMemory= data;
        this.listaDeMesas = false;
        this.contadorDePedido = true;
      },
      cancelaContadorDePedido(){
        this.inMemory = null;
        this.listaDeMesas = true;
        this.contadorDePedido = false;
      },
      novoContadorDePedido(){
        this.contadorDePedido = false;
        this.novoPedido = true;
      }
    }
}
</script>
<style scoped>

</style>
