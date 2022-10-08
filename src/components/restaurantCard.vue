<template>
  <div class="restaurant--card">
    <div class="restaurant--image">

    </div>
    <p>test</p>
  </div>
</template>

<script>
export default {
  name: "restaurantCard"
}
</script>

<style lang="scss">
    .restaurant--card {
        width: 32%;
        height: 30vh;
        border: 1px solid #000;
        p{
            margin:0px;
        }
        .restaurant--image{
            height: 70%;
            width: 100%;
            background-image: url('https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==');
        }
    }
</style>