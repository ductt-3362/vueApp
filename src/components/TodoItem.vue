<script setup>
import { ref } from "vue";

defineProps(["todo", "index"]);
const emit = defineEmits(["handleDelete", "handleSave"]);

const vFocus = {
  mounted: (el) => el.focus(),
};
const isEditing = ref(false);
const editingId = ref(-1);
const editText = ref("");
const handleEdit = function (index) {
  isEditing.value = true;
  editingId.value = index;
};

const handleSave = function () {
  isEditing.value = false;

  emit("handleSave", editText.value);
};
</script>

<template>
  <template v-if="editingId === index && isEditing">
    <div class="flex">
      <input
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :value="todo"
        @change="(e) => (editText = e.target.value)"
        v-focus
        type="text"
      />
      <button
        @click="handleSave"
        class="ml-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Save
      </button>
    </div>
  </template>

  <template v-else>
    <div class="flex justify-between items-center">
      <p class="w-32">
        {{ todo }}
      </p>
      <div>
        <button
          @click="handleEdit(index)"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Edit
        </button>
        <button
          @click="$emit('handleDelete')"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  </template>
</template>
