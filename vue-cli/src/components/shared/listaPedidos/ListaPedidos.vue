<template>
  <div id="listaPedidos">
    <b-row>
     <b-col cols="12" class="mx-auto">
      <div class="mt-2">
          <h1>Mesa : {{infoDaMesa.mesa.numeroDaMesa}}</h1>
      </div>
      <div class="mediumSpace">
          <hr>
       <div v-for="(pedido,index) in listaDePedido">
           <p>Nome: {{pedido.nome}}   |   
           Tipo: {{pedido.tipo}}   |   
           Valor: {{pedido.valor}}</p>
           <b-button size="sm" variant="danger" @click="remover(index)">Remover</b-button>
           <hr>
       </div>
      </div>
     </b-col>
    </b-row>
    <div class="mediumSpace">
      <b-row>
        <b-col cols="12" sm="4" offset-lg="3" lg="2" class="pb-2">
          <b-button size="lg" variant="danger" @click="cancelar()">Cancelar</b-button>
        </b-col>
        <b-col cols="12" sm="4" lg="2" class="pb-2">
          <b-button size="lg" variant="primary" @click="novo()">Novo</b-button>
        </b-col>
        <b-col cols="12" sm="4" lg="2" class="pb-2">
          <b-button size="lg" variant="success" @click="finalizar()">Finalizar</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "listaPedidos",
  props:{
    infoDaMesa:{
      type:Object
    },
    listaDePedido:{
        type:Array
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
    },
    remover(index){
      this.$emit('removerListaPedidos', index)
    },
    finalizar(){
      this.$emit('finalizaListaPedidos')
    }
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
