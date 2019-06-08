<template>
    <b-row>
        <b-card :bg-variant="infoBg" :text-variant="infoTextColor">
            <b-row>
                <b-col>MESA:01</b-col>
                <b-col>TIME:</b-col>
                <div class="w-100"></div>
                <b-col>#0000</b-col>
                <b-col></b-col>
             </b-row>
        </b-card>
    </b-row>
</template>
<script>
import moment from 'moment';
export default {
    name: "SubInfo",
    props:{
    },
    data: () => ({
        infoTextColor: 'white',
        infoBg: 'success',
        tempoDePreparo: null
    }),
    created() {

    },
    methods:{

    }
}
</script>
<style scoped>
.card-body{
    padding: 0.35rem;
}
</style>
