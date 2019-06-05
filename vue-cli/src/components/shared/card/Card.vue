<template>
    <div id="card" class="my-2 " style="max-width: 19rem;">
        <b-card 
            :header="cardTitle" 
            header-text-variant="white"            
            :border-variant="cardColor"
            :header-border-variant="cardColor"
            :header-bg-variant="cardColor">
            <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
            </b-card-text>
            <info></info>
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
    p{
        font-size: 12pt
    }
</style>
