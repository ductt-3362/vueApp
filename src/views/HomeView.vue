<script setup>
import { useCounterStore } from "../store/CountTask";
const store = useCounterStore();
</script>

<template>
  <div>Here is home page. The number of your tasks is: {{ store.count }}</div>
</template>