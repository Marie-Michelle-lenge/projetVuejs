<template>
  <div class="home">
    <!-- <restaurantRow></restaurantRow> -->
    <HelloWorld/>
    hello world
  </div>
</template>

<script>

  import BDD from '../BDD'
  import {onMounted} from 'vue'
  // import RestaurantRow from '@/components/restaurantRow';
  import HelloWorld from '../components/HelloWorld.vue';
  console.log(HelloWorld);
export default {
    name: 'homePage',
    Components: {
      // RestaurantRow,
      HelloWorld
    },
  setup (){
    class Restaurant {
      constructor(name, note, image, drive_time){
        this.name= name
          this.note= note
          this.image= image
          this.drive_time= drive_time
      }
    }
    let data_restaurant =[]
  const makeDataRestaurant = () => {
    let three_restaurant = [];

    for (const restaurant of BDD ){
      const new_restaurant = new Restaurant(restaurant.name,restaurant.note,restaurant.image,
     restaurant.drive_time )
     
    if (three_restaurant.length ===2){
      three_restaurant.push(new_restaurant);
      data_restaurant.push(three_restaurant);
      three_restaurant=[];
    }else{
      three_restaurant.push(new_restaurant)
    }
    }
    
  }

onMounted(makeDataRestaurant);
},
}
</script>

<style>

</style>
