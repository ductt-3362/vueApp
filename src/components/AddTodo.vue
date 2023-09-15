<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue", "handleAdd"]);
</script>

<template>
  <input
    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <button
    @click="$emit('handleAdd')"
    class="ml-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >
    Add todo
  </button>
</template>