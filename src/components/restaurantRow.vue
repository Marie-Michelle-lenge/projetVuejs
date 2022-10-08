<template>
  <div class="restaurant--">
    <h2 class="title">
        nos restaurants
    </h2>
    <div class="wrapper--card">
        <restaurant-card v-for="(card,index) in 3" :key="index"/>
    </div>
  </div>
</template>

<script>
import restaurantCard from './restaurantCard.vue';
export default {
    name: "restaurantRow",
    components:{
        restaurantCard,
    },
    created(){
        console.log('I\'am a restaurant component');
    }
}
</script>

<style lang='scss'>
    .restaurant--row{
        .wrapper--card{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border:100px;
            border-block-color: red;
        }
    }

</style>