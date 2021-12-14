<script>

  import axios from 'axios'
  //const axios = require('axios')
  import BasicWeather from './components/BasicWeather.vue'

  export default {
    created() {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=58.59&lon=25.01&exclude=hourly,daily&units=metric&appid=da5ba07233d4b06864f111f800d573d6")
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
  <main :class="(weather.current.humidity > 50) ? 'bg-blue' : 'bg-yellow'">
    <div class="hey">
      <span class="mediumtext">
        How's going today in
      </span>
      <span class="mediumtext bold">
        {{ weather.timezone }} 
      </span>
    </div>

    <BasicWeather :data="weather.current" />

  </main>

  <!--<p>{{ weather }}</p>-->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  text-align: center;
  display: grid;
  place-items: center;
  height: 100%;
}

#app {
  font-family: 'Jost', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.bold {
  font-weight: 600;
}
</style>
