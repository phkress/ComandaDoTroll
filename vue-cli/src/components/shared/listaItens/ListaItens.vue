<template>
  <div id="listaMesas">
    <b-row>
     <b-col cols="12" class="mx-auto">
         <div class="mesaLista borda" v-for="(iten,index) in itens" v-on:click="comunicaIten(_id, nome)">
               <span class="float-left">
                 Item: {{iten.nome}}
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
    comunicaIten(_id, nomex) {
      this.$emit("itenSelecionado",  {_id, nome} );
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
