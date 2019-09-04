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
        @cancelaNovoPedido='cancelaContadorDePedido'
        @showListaItens='mostrarListaItens'
      ></novo-pedido>
      <lista-itens
        :itens="itens"
        v-show="listaItens"
      ></lista-itens>
      </b-container>
  </div>
</template>
<script>
import ListaMesas from '../shared/listaMesas/ListaMesas.vue';
import ContadorDePedidos from '../shared/contadorDePedidos/ContadorDePedidos.vue';
import NovoPedido from '../shared/novoPedido/NovoPedido.vue';
import ListaItens from '../shared/listaItens/ListaItens.vue';
export default {
    name: "Mesa",
    components:{
      "lista-mesas" : ListaMesas,
      "contador-de-pedidos" : ContadorDePedidos,
      "novo-pedido" : NovoPedido,
      "lista-itens": ListaItens
    },
    data: () => ({
      mesas: [{numeroDaMesa:1,pendentes:0,pedidos:1},{numeroDaMesa:2,pendentes:2,pedidos:2},{numeroDaMesa:3,pendentes:1,pedidos:1}],
      itens: [{nome:'teste'},{nome:'teste2'}],
      categoria: "",
      listaDeMesas: true,
      contadorDePedido: false,
      novoPedido: false,
      listaItens: false,
      inMemory: {mesa:{numeroDaMesa:0,pendentes:0,pedidos:0}},
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
        this.novoPedido = false;
        this.listaItens = false;
      },
      novoContadorDePedido(){
        this.contadorDePedido = false;
        this.novoPedido = true;
      },
      mostrarListaItens(data){
        this.categoria = data;
        this.novoPedido = false;
        this.listaItens = true;
      }
    }
}
</script>
<style scoped>

</style>
