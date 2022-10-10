<template>
  <div class="restaurant--row">
    <h2 class="title">
        nos restaurants
       
    </h2>
    <div class="wrapper--card">
        <restaurant-card v-for="(card,index) in three_restaurant" :info_restaurant="card" :key="index"/>
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
    props: {
        three_restaurant: Array
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
        }
    }

</style>