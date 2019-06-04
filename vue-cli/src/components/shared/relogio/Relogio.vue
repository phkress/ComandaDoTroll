<template>
    <div id="Relogio">
        <p>{{tempoAtual}}</p>
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
    created() {
        this.tempoAtual = moment().format('LTS');
        setInterval(() => this.updateTempoAtual(), 1 * 1000);
    }, 
    methods: {
        updateTempoAtual() {
        this.tempoAtual = moment().format('LTS');
        }
    }
}
</script>
<style scoped>

</style>
