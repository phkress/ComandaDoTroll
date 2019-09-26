<template>
  <div id="Mesas">
      <b-container fluid>
        <lista-mesas
          :lmesas='mesas'
          @mesaSelecionada="choseMesa"
          v-if="listaDeMesas"
        ></lista-mesas>
        <contador-de-pedidos
          :infoDaMesa='inMemory'
          @cancelaContadorDePedido='cancelaContadorDePedido'
          @novoContadorDePedido='novoContadorDePedido'
          v-if="contadorDePedido"
        ></contador-de-pedidos>
      <novo-pedido
        v-if="novoPedido"
        @cancelaNovoPedido='cancelaContadorDePedido'
        @showListaItens='mostrarListaItens'
      ></novo-pedido>
      <lista-itens
        :itens="itens"
        @itenSelecionado='itenSelecionado'
        v-if="listaItens"
      ></lista-itens>
      <detalhes-itens
        :itenEscolido="inMemoryIten"
        @iEscolido="itemSelecionado"
        v-if="detalhesItens"
      ></detalhes-itens>
      <lista-pedidos
        :infoDaMesa='inMemory'
        :listaDePedido='listaDePedido'
        @cancelaContadorDePedido='cancelaContadorDePedido'
        @novoContadorDePedido='novoContadorDePedido'
        @removerListaPedidos='removerListaPedidos'
        @finalizaListaPedidos='finalizaListaPedidos'
        v-if="showListaPeidos"
      >
      </lista-pedidos>
      </b-container>
  </div>
</template>
<script>
import ListaMesas from '../shared/listaMesas/ListaMesas.vue';
import ContadorDePedidos from '../shared/contadorDePedidos/ContadorDePedidos.vue';
import NovoPedido from '../shared/novoPedido/NovoPedido.vue';
import ListaItens from '../shared/listaItens/ListaItens.vue';
import DetalhesItens from '../shared/detalhesItens/DetalhesItens.vue';
import LancheService from '../../domain/lanche/LancheService';
import PedidoService from '../../domain/pedido/PedidoService';
import Pedido from '../../domain/pedido/Pedido';
import ListaPedidos from '../shared/listaPedidos/ListaPedidos.vue';
export default {
    name: "Mesa",
    components:{
      "lista-mesas" : ListaMesas,
      "contador-de-pedidos" : ContadorDePedidos,
      "novo-pedido" : NovoPedido,
      "lista-itens": ListaItens,
      "detalhes-itens": DetalhesItens,
      "lista-pedidos": ListaPedidos
    },
    data: () => ({
      mesas: [{numeroDaMesa:1,pendentes:0,pedidos:1},{numeroDaMesa:2,pendentes:2,pedidos:2},{numeroDaMesa:3,pendentes:1,pedidos:1}],
      itens: [],
      listaDeMesas: true,
      contadorDePedido: false,
      novoPedido: false,
      listaItens: false,
      detalhesItens: false,
      showListaPeidos: false,
      inMemory: {mesa:{numeroDaMesa:0,pendentes:0,pedidos:0,preparando:0}},
      inMemoryIten:{},
      listaDePedido: [],
    }),
    methods: {
      choseMesa(data) {
        this.inMemory= data;
        this.listaDeMesas = false;
        this.contadorDePedido = true;
      },
      cancelaContadorDePedido(){
        this.inMemory = null;
        this.listaDePedido= [];
        this.listaDeMesas = true;
        this.contadorDePedido = false;
        this.novoPedido = false;
        this.listaItens = false;
        this.showListaPeidos = false;
      },
      novoContadorDePedido(){
        this.contadorDePedido = false;
        this.novoPedido = true;
        this.showListaPeidos = false;
      },
      mostrarListaItens(data){
        this.getListaCategoria(data)
        this.novoPedido = false;
        this.listaItens = true;
      },
      itenSelecionado(data){
        this.listaItens = false;
        this.detalhesItens = true;
        this.inMemoryIten = data.itenLista;
      },
      getListaCategoria(categoria){
        this.serviceLanche
            .listaCategoria(categoria)
            .then(itens => {
              this.itens = itens;
            }, err => {
              console.log(err);
            });
      },
      itemSelecionado(data){
        this.listaDePedido.push(data);
        this.detalhesItens = false;
        this.showListaPeidos = true;
      },
      removerListaPedidos(data){
        this.listaDePedido.splice(data,1);
      },
      finalizaListaPedidos(){
        let radom = Math.floor(Math.random() * 999)
        let pedido = new Pedido(this.listaDePedido, this.inMemory.mesa.numeroDaMesa, "cozinha", radom);
        this.servicePedido
        .cadastra(pedido)
        .then(() => {
          this.cancelaContadorDePedido();
        }, err => {
          // this.$router.push("login");
          console.log(err)
        });
      }
    },
  created() {
    this.serviceLanche = new LancheService(this.$resource);
    this.servicePedido = new PedidoService(this.$resource);
  }
}
</script>
<style scoped>

</style>
