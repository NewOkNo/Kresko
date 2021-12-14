<script>

  import axios from 'axios'
import BasicWeather from './components/BasicWeather.vue'

  export default {
    created() {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=58.59&lon=25.01&exclude=hourly,daily&appid=da5ba07233d4b06864f111f800d573d6")
            .then(response => {
            console.log(response);
            this.weather = response.data;
        });
    },
    data() {
        return {
            weather: ""
        };
    },
    components: { BasicWeather }
}

</script>

<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->

  <BasicWeather :data="weather.current" />

  <!--<p>{{ weather }}</p>-->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap');

#app {
  font-family: 'Jost', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
