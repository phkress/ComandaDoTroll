<template>
    <div id="card" class="my-2 " style="max-width: 19rem;">
        <b-card 
            :header="cardTitle" 
            header-text-variant="white"            
            :border-variant="cardTitleColor"
            :header-border-variant="cardTitleColor"
            :header-bg-variant="cardTitleColor"
        >
            <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <info></info>
            </blockquote>
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
        cardTitleColor: 'success'
    }),
}
</script>
<style scoped>
    p{
        font-size: 12pt
    }
</style>
