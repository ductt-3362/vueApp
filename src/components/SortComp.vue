<script setup>
</script>

<template>
  <select
    name="sort"
    class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @change="(e) => $emit('handleSort', e.target.value)"
  >
    <option value="az">A->Z</option>
    <option selected disabled hidden>Sort</option>
    <option value="za">Z->A</option>
  </select>
</template>