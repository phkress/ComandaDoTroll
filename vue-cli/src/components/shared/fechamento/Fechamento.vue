<template>
  <div id="contadorDePedido">
    <b-row>
     <b-col cols="12" class="mx-auto">
      <div class="mt-2">
          <h1>Mesa : {{infoDaMesa.mesa.numeroDaMesa}}</h1>
      </div>
      <div class="bigSpace">    
        <div v-for="pedidos in listaDosPedidos">
            <div v-for="item in pedidos.listaDePedidos">
                <b-row>
                    <b-col cols="4" sm="4" lg="2" offset-lg="3">Nome:{{item.nome}}</b-col>  
                    <b-col cols="4" sm="4" lg="2" > Tipo: {{item.tipo}}</b-col>  
                    <b-col cols="4" sm="4" lg="2" > Valor: {{item.valor}}</b-col>                     
                </b-row>
                <hr>
            </div>
        </div>
      </div>
     </b-col>
    </b-row>
    <div class="mediumSpace">
        <h3>Total:{{total}}</h3> 
        <p>Total com 10%:{{totalComGorgeta}}</p>
    </div>
    <div class="mediumSpace">
      <b-row>
        <b-col cols="12" sm="6" offset-lg="4" lg="2" class="pb-2">
          <b-button size="lg" variant="danger" @click="cancelar()">Cancelar</b-button>
        </b-col>
        <b-col cols="12" sm="6" lg="2" class="pb-2">
          <b-button size="lg" variant="info" @click="fechar()">Fechar Mesa</b-button>
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
    },
    listaDosPedidos:{
        type:Array
    }
  },
  data: () => ({
      listaDosPedidoVar:[],
      total:0,
      totalComGorgeta:0
  }),
  methods: {
    cancelar() {
      this.$emit('cancelaContadorDePedido')
    },
    fechar(){
      this.$emit('fecharConta', this.$props.infoDaMesa.mesa.numeroDaMesa)
    },
    calc(){
        let lista = this.listaDosPedidoVar;
        var calculoTotal= 0;
        for (let i = 0; i < lista.length; i++) {           
            let pedidos = lista[i].listaDePedidos;
            for (let j = 0; j < pedidos.length; j++) {
                let item = pedidos[j].valor;
                let valor = parseInt(item);
                calculoTotal += valor                
            }            
        }
        let gorgeta = calculoTotal+(calculoTotal/10);        
        this.total = calculoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        this.totalComGorgeta = gorgeta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }    
  },
    created() {
      this.servicePedido = new PedidoService(this.$resource);
      this.listaDosPedidoVar = this.$props.listaDosPedidos;
      this.calc();
    }
}
</script>
<style lang="scss" scoped>
.bigSpace{
  margin-top: 4em;
}.mediumSpace{
  margin-top: 3em;
}
</style>
