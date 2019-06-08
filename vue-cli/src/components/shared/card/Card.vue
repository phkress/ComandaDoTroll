<template>
    <div id="card" class="my-2 " style="max-width: 19rem;">
        <b-card
            :header="cardTitle"
            header-text-variant="white"
            :border-variant="cardColor"
            :header-border-variant="cardColor"
            :header-bg-variant="cardColor">
            <b-row>
              <b-card-text>
                <div class='listaDePedidos' v-for='i in 1'>
                  1 - BATATA COM CHEDDAR
                   <div class="addPedido">
                      1 - DICIONAR BACON
                   </div>
                   <div class="removerPedido">
                     1 - REMOVER QUEIJO
                   </div>
                   <hr>
                </div>

              </b-card-text>
            </b-row>
            <b-row><info></info></b-row>
        </b-card>
    </div>
</template>
<script>
import SubInfo from '../subInfo/SubInfo.vue';
export default {
    name: "Card",
    props:{
        cardTitle:{
            required: true,
            type: String
        },
    },
    components:{
        'info': SubInfo,
    },
    data: () => ({
        cardTitleColor: 'success',
        cardColor: 'dark'
    }),
}
</script>
<style scoped>

  .card-header{
    padding-top:0rem;
    padding-bottom:0rem;
  }
  .card-body{
    padding-bottom:0.25rem;
    padding-top:0.25rem;
  }
  p{
    font-size: 12pt
  }
</style>
