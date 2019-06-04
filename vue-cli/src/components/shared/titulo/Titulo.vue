<template>
    <div id="Titulo">
        <b-container fluid>
            <b-row class="text-center mt-3">
                <b-col> </b-col>
                <b-col cols="8">
                     <h1>{{titulo}}</h1>
                </b-col>
                <b-col>
                    <clock></clock>                 
                </b-col>
            </b-row>
        </b-container>   
    </div>
</template>
<script>
import Relogio from '../relogio/Relogio.vue'
export default {
    name: "Titulo",
    components:{
        'clock' : Relogio,
    },
    props:{
        titulo:{
            required: true,
            type: String            
        }
    },
    data() {
        return {

        }
    },
}
</script>
<style scoped>

</style>
