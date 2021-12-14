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
            getCurentWeather().then(response => {
                console.log(response)
            })
        }
    }
}
</script>