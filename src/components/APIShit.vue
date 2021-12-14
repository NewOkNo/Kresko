<template>
    <div>
        <h3>Click de fucking button</h3>
        <button @click="getWeather">bruh</button>
    </div>
</template>
<script>
import getCurentWeather from '../services/WeatherService.js'

export default {
    methods:{
        getWeather() {
            //getCurentWeather()
            /*const response = getCurentWeather()
            response.then(value => {
                console.log(value)
            })*/
            /*getCurentWeather().then(response => {
                console.log(response)
            })*/
            getCurentWeather().then(console.log)
        }
    }
}
</script>