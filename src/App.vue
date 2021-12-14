<script>

  import axios from 'axios'

  export default {
    created() {
      axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=58.59&lon=25.01&exclude=hourly,daily&appid=da5ba07233d4b06864f111f800d573d6')
        .then(response => {
          console.log(response)
          this.weather = response.data
        })
    },
    data() {
      return {
        weather: ''
      }
    }
  }

</script>

<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->

  <p>{{ weather }}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
