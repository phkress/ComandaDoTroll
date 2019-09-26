<template>
    <div id="Cozinha">
        <!--<my-titulo titulo="Pedidos"></my-titulo>        -->
        <b-container fluid>
           <b-row>
               <b-col cols="12" class="mx-auto">
                    <b-card-group class="ml-2" deck>
                        <cozinha-card v-for="(pedido, index) in listaPedidos" :key="index"
                            v-show="pedido.status == 'cozinha'"
                            cardTitle="Salão"
                              :pedido='pedido'
                              nextStatus='pronto'
                              @reload='loadList'
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
import PedidoService from '../../domain/pedido/PedidoService';
export default {
    name: "Cozinha",
    components: {
        'my-titulo' : Titulo,
        'cozinha-card': Card,
    },
    data: () => ({
      listaPedidos: [],
    }),
    methods: {
      loadList(){
      this.servicePedido.lista()
          .then(pedido => {
            this.listaPedidos = pedido;
          }, err => {
            console.log(err);
          }); 

      }
    },
    created() {
      this.servicePedido = new PedidoService(this.$resource);
      setInterval(() => this.loadList(), 1 * 2000);
    }
}
</script>
<style scoped>
/*.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}*/
</style>
