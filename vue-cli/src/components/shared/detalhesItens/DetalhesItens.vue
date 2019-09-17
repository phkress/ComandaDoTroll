<template>
  <div id="detalhesItens">
    <b-row>
     <b-col cols="12" class="mx-auto">
      <div class="mt-2">
          <h1>Nome: {{itenEscolido.nome}}</h1>
      </div>
      <div class="bigSpace">
        <p>Descrição: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     </b-col>
    </b-row>
    <div class="mediumSpace">
      <b-row>
        <b-col cols="12" sm="6" lg="2" class="pb-2">
          <p>Combo R$: {{itenEscolido.combo}}</p>
          <b-button variant="success" @click="pedir('Combo', itenEscolido)">Pedir</b-button>
        </b-col>
        </b-row>
        <b-row>
        <b-col cols="12" sm="6" lg="2" class="pb-2 mt-2">
            <p>Individual R$: {{itenEscolido.individual}}</p>
          <b-button variant="success" @click="pedir('Individual', itenEscolido)">Pedir</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetalhesItens",
  props:{
    itenEscolido:{
      type:Object
    }
  },
  data: () => ({

  }),
  methods: {
    pedir(tipo, itenEscolido) {
      if('Combo'){
        console.log(itenEscolido);
      }
    }

  }
}
</script>
<style lang="scss" scoped>
.bigSpace{
  margin-top: 2em;
}.mediumSpace{
  margin-top: 0.5em;
}
</style>
