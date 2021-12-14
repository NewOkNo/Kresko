<script setup lang="ts">

  const props = defineProps<{ data: Object }>();

</script>

<template>
  <div class="wrapper" :class="(data.humidity > 50) ? 'bg-blue' : 'bg-yellow'">
    <span class="bigtext">
      {{ data.temp }}°C
    </span>
    <span class="mediumtext" v-for="(weather, key) in data.weather" :key="key">
      {{ weather.description }}

      <span v-if="key != (data.weather.length - 1)">
        and
      </span>
    </span>

    <span class="smalltext" v-if="data.humidity > 80 && data.clouds > 80">
      Chance of rain (80%)
    </span>
    <span class="smalltext" v-else>
      Chance of rain (40%)
    </span>
  </div>

  <p>{{ data }}</p>
</template>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .bg-yellow {
    background-color: #FFD275;
  }

  .bg-blue {
    background-color: #acc1f8;
  }

  .bigtext {
    font-size: 9.375rem;
    font-weight: 600;
    line-height: 8rem;
  }

  .mediumtext {
    font-size: 2.75rem;
  }
</style>