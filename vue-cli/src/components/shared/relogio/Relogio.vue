<template>
    <div id="Relogio">
        <p v-text="tempoAtual"></p>
    </div>
</template>
<script>
//https://momentjs.com/ <- Documentação para alterar formato da hora
import moment from 'moment';
export default {
    name: "Relogio",
    data(){
        return {
            tempoAtual: null        
        }
    }, 
    methods: {
        updateTempoAtual() {
        this.tempoAtual = moment().format('LTS');
        }
    },
    created() {
        this.tempoAtual = moment().format('LTS');
        setInterval(() => this.updateTempoAtual(), 1 * 1000);
    }
}
</script>
<style scoped>

</style>
