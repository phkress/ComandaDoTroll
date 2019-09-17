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
        @itenSelecionado='itenSelecionado'
        v-show="listaItens"
      ></lista-itens>
      <detalhes-itens
        :itenEscolido="inMemoryIten"
        v-show="detalhesItens"
      ></detalhes-itens>
      </b-container>
  </div>
</template>
<script>
import ListaMesas from '../shared/listaMesas/ListaMesas.vue';
import ContadorDePedidos from '../shared/contadorDePedidos/ContadorDePedidos.vue';
import NovoPedido from '../shared/novoPedido/NovoPedido.vue';
import ListaItens from '../shared/listaItens/ListaItens.vue';
import DetalhesItens from '../shared/detalhesItens/DetalhesItens.vue';
export default {
    name: "Mesa",
    components:{
      "lista-mesas" : ListaMesas,
      "contador-de-pedidos" : ContadorDePedidos,
      "novo-pedido" : NovoPedido,
      "lista-itens": ListaItens,
      "detalhes-itens": DetalhesItens
    },
    data: () => ({
      mesas: [{numeroDaMesa:1,pendentes:0,pedidos:1},{numeroDaMesa:2,pendentes:2,pedidos:2},{numeroDaMesa:3,pendentes:1,pedidos:1}],
      itens: [{nome:'comida A'},{nome:'Comida B',categoria:'sanduiche',combo:'28,00',individual:'12,00'}],
      categoria: "",
      listaDeMesas: true,
      contadorDePedido: false,
      novoPedido: false,
      listaItens: false,
      detalhesItens: false,
      inMemory: {mesa:{numeroDaMesa:0,pendentes:0,pedidos:0}},
      inMemoryIten:{}
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
      },
      itenSelecionado(data){
        this.listaItens = false;
        this.detalhesItens = true;
        this.inMemoryIten = data.itenLista;
      }
    }
}
</script>
<style scoped>

</style>
