<template>
    <div id="card" class="my-2 " style="max-width: 19rem;">
        <b-card
            :header="cardTitle"
            header-text-variant="white"
            :border-variant="cardColor"
            :header-border-variant="cardColor"
            :header-bg-variant="cardColor"
            @dblclick="pronto()"            
            >
            <b-row>
              <b-col cols="12">
              <b-card-text>
                <div class='listaDePedidos' v-for='iten in pedido.listaDePedidos'>
                    {{iten.nome}}<br>
                    {{iten.tipo}}
                   <hr>
                </div>

              </b-card-text>
            </b-col>
            </b-row>
            <b-row><info
              :mesa="pedido.mesa"
              :codigo="pedido.codigo"
            ></info></b-row>
        </b-card>
    </div>
</template>
<script>
import PedidoService from '../../../domain/pedido/PedidoService';
import SubInfo from '../subInfo/SubInfo.vue';
export default {
    name: "Card",
    props:{
        cardTitle:{
            required: true,
            type: String
        },
        pedido:{
          type:Object
        },
        nextStatus:{
          type:String
        }
    },
    components:{
        'info': SubInfo,
    },
    data: () => ({
        cardTitleColor: 'success',
        cardColor: 'dark'
    }),
    methods:{
      pronto(){
        this.pedido.status=this.$props.nextStatus;
        this.servicePedido
        .cadastra(this.pedido)
        .then(() => {
           this.$emit('reload')
        }, err => {
          console.log(err)
        });
        
      }
    },
    created() {
      this.servicePedido = new PedidoService(this.$resource);
    }
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
  .listaDePedidos{
    margin: 0px;
    padding: 0px;
  }
  hr{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  p{
    font-size: 12pt
  }
</style>
