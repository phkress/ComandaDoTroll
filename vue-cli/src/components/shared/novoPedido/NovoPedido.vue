<template>
  <div id="novoPedido">
      <div >
        <b-card-group deck>
            <b-col col lg="6" class="mt-3">
          <b-card bg-variant="success" text-variant="white" header=""  @click="listaItens('sanduiche')" class="text-center">
            <b-card-text>Sanduíches</b-card-text>
          </b-card>
        </b-col>
        <b-col col lg="6" class="mt-3">
          <b-card bg-variant="primary" text-variant="white" header="" @click="listaItens('aperitivos')"  class="text-center">
            <b-card-text>Aperitivos</b-card-text>
          </b-card>
        </b-col>
        </b-card-group>
      </div>
      <div >
        <b-card-group deck>
            <b-col col lg="6" class="mt-3">
          <b-card bg-variant="danger" text-variant="white" header=""  @click="listaItens('sobremesas')" class="text-center">
            <b-card-text>Sobremesas</b-card-text>
          </b-card>
        </b-col>
        <b-col col lg="6" class="mt-3">
          <b-card bg-variant="warning" text-variant="white" header="" @click="listaItens('bebidas')"  class="text-center">
            <b-card-text>Bebidas</b-card-text>
          </b-card>
        </b-col>
        </b-card-group>
      </div>
      <div class="mediumSpace">
        <b-row>
          <b-col cols="12" sm="6" offset-lg="5" lg="2" class="pb-2 mt-3">
            <b-button size="lg" variant="danger" @click="cancelar()">Cancelar</b-button>
          </b-col>
        </b-row>
      </div>
  </div>
</template>
<script>
export default {
  name: "NovoPedido",
  data: () => ({

  }),
  methods: {
    listaItens(categoria) {
      this.$emit('showListaItens', categoria);
    },
    cancelar() {
      this.$emit('cancelaNovoPedido')
    }
  }
}
</script>
<style scoped>
.cardCustom{
  height: 250px;
}
.custom-card-body{
    padding-bottom:0.25rem;
    padding-top:0.25rem;
}
.card-body p{
  margin-top: 10px;
  font-size: 34pt;
}
</style>
