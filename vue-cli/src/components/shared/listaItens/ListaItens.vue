servic<template>
  <div id="listaMesas">
    <b-row>
     <b-col cols="12" class="mx-auto">
         <div class="mesaLista borda" v-for="(itenLista,index) in itens" v-on:click="comunicaIten(index, itenLista)">
               <span class="float-left">
                 Item: {{itenLista.nome}}
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
    itens:{
      type:Array
    }
  },
  data: () => ({

  }),
  methods: {
    comunicaIten(index, itenLista) {
      this.$emit("itenSelecionado",  {index, itenLista} );
    },
  }
}
</script>
<style lang="scss" scoped>
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
