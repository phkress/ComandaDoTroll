<template>
    <div id="Titulo">
        <b-container fluid>
            <b-row class="text-center mt-3">
                <b-col> </b-col>
                <b-col cols="8">
                     <h1>{{titulo}}</h1>
                </b-col>
                <b-col>
                    RELOGIO
                </b-col>
            </b-row>
        </b-container>   
    </div>
</template>
<script>
export default {
    name: "Titulo",
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
