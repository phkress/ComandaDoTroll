<template>
  <div id="novoPedido">
    <br>
      <b-row>
        <b-card-group deck>
          <b-col cols="12" md="3">
           <b-card  bg-variant="success" text-variant="white" class="text-center custom-card-body cardCustom">
             <b-card-text><p>Sanduíches</p></b-card-text>
            </b-card>
          </b-col><b-col cols="12" md="3">
           <b-card bg-variant="primary" text-variant="white" class="text-center custom-card-body cardCustom">
            <b-card-text><p>Aperitivos</p></b-card-text>
           </b-card>
         </b-col ><b-col cols="12" md="3">
           <b-card bg-variant="danger" text-variant="white" class="text-center custom-card-body cardCustom">
            <b-card-text><p>Sobremesas</p></b-card-text>
           </b-card>
         </b-col ><b-col cols="12" md="3">
           <b-card bg-variant="warning" text-variant="white" class="text-center custom-card-body cardCustom">
            <b-card-text><p>Bebidas</p></b-card-text>
           </b-card>
          </b-col >
        </b-card-group>
      </b-row>
  </div>
</template>
<script>
export default {
  name: "NovoPedido",
  data: () => ({

  })
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
  font-size: 36pt;
}
</style>
