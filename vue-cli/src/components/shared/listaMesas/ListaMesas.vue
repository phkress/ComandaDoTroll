<template>
  <div id="listaMesas">
    <b-row>
     <b-col cols="12" class="mx-auto">
         <div class="mesaLista borda" v-for="(mesa,index) in lmesas" v-on:click="comunicaMesa(mesa, index)">
               <span class="float-left">
                 Mesa: {{mesa.numeroDaMesa}}
               </span>
               <span class="float-right">
                 Pendentes: {{mesa.pendentes}} - Pedidos: {{mesa.pedidos}}
               </span>
         </div>
     </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "listaMesas",
  props:{
      lmesas:{
        type:Array,
      }
    },
  data: () => ({

  }),
  methods: {
    comunicaMesa(mesa, index) {
      this.$emit("mesaSelecionada",  {mesa, index} );
    },
  }
}
</script>
<style lang="scss" scoped>
.teste{
  background-color: red;
  width: 100%;
}
.blue{
  background-color: blue;
  text-align: right;
}
.borda{
  border:thin solid black;
  border-top: none;
}
.mesaLista{
  /* text-align: left; */
  padding-top: 1em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  height: 3.5em;
}
</style>
