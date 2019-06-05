<template>
    <b-row>        
        <b-card :bg-variant="infoBg" :text-variant="infoTextColor">
            <b-row>
                <b-col>1</b-col>                 
                <b-col>2</b-col>
                <div class="w-100"></div>
                <b-col>3</b-col>                 
                <b-col>4</b-col>
             </b-row> 
        </b-card>
    </b-row>
</template>
<script>
export default {
    name: "SubInfo",
    props:{
        infoBg:{
            required: true,
            type: String,
            default: 'success'
        }
    },
    data: () => ({
        infoTextColor: 'white',        
    })
}
</script>
<style scoped>

</style>
