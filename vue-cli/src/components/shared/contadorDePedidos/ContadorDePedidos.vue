<template>
  <div id="contadorDePedido">
    <b-row>
     <b-col cols="12" class="mx-auto">
      <div class="mt-2">
          <h1>Mesa : {{infoDaMesa.mesa.numeroDaMesa}}</h1>
      </div>
      <div class="bigSpace">        
        <h4>Pendentes:{{infoDaMesa.mesa.pendentes}}</h4>
        <br>        
        <h3>Pedidos: {{infoDaMesa.mesa.pedidos}}</h3>
      </div>
     </b-col>
    </b-row>
    <div class="mediumSpace">
      <b-row>
        <b-col cols="12" sm="6" offset-lg="4" lg="2" class="pb-2">
          <b-button size="lg" variant="danger" @click="cancelar()">Cancelar</b-button>
        </b-col>
        <b-col cols="12" sm="6" lg="2" class="pb-2">
          <b-button size="lg" variant="primary" @click="novo()">Novo</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import PedidoService from '../../../domain/pedido/PedidoService';
export default {
  name: "ContadorDePedido",
  props:{
    infoDaMesa:{
      type:Object
    }
  },
  data: () => ({
  }),
  methods: {
    cancelar() {
      this.$emit('cancelaContadorDePedido')
    },
    novo(){
      this.$emit('novoContadorDePedido')
    }
    
  },
    created() {
      this.servicePedido = new PedidoService(this.$resource);

      this.servicePedido.contadorMesa(this.$props.infoDaMesa.mesa.numeroDaMesa)
          .then(pedido => {
            this.$props.infoDaMesa.mesa.pedidos = pedido
          }, err => {
            console.log(err);
          });
      this.servicePedido.contadorMesaStatus(this.infoDaMesa.mesa.numeroDaMesa,'cozinha')
          .then(pendentes => {
            this.$props.infoDaMesa.mesa.pendentes = pendentes
          }, err => {
            console.log(err);
          });
      
    }
}
</script>
<style lang="scss" scoped>
.bigSpace{
  margin-top: 8em;
}.mediumSpace{
  margin-top: 3em;
}
</style>
