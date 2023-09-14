<script setup>
import { useCounterStore } from "../store/CountTask";
const store = useCounterStore();
</script>

<template>
  <div>Here is home page. The number of your tasks is:{{ store.count }}</div>
  <button
    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
    @click="store.increment()"
  >
    Increase the count
  </button>
</template>