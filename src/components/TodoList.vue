<script setup>
import { ref } from "vue";
const todos = ref(["Play game", "Study", "Read book"]);
const todo = ref("");
const isEditing = ref(false);
const editingId = ref(-1);
const editText = ref("");
const vFocus = {
  mounted: (el) => el.focus(),
};
const handleAdd = function (value) {
  if (value) {
    todos.value.push(value);
  }
  todo.value = "";
};
const handleDelete = function (index) {
  if (index >= 0) {
    todos.value.splice(index, 1);
  }
};
const handleEdit = function (index) {
  isEditing.value = true;
  editingId.value = index;
};
const handleChange = function (value) {
  editText.value = value;
};
const handleSave = function (index) {
  if (editText.value) {
    todos.value.splice(index, 1, editText.value);
  }
  editText.value = "";
  isEditing.value = false;
};

const handleSort = function (value) {
  if (value === "az") {
    todos.value = todos.value.sort();
  }
  if (value === "za") {
    todos.value = todos.value.reverse();
  }
};
</script>

<template>
  <div class="h-screen justify-center flex items-center flex-col">
    <div>
      <span class="text-2xl">Todo List</span>
      <select
        name="sort"
        class="ml-2"
        @change="(e) => handleSort(e.target.value)"
      >
        <option value="az">A->Z</option>
        <option selected disabled hidden>Choose</option>
        <option value="za">Z->A</option>
      </select>
    </div>
    <ul class="mt-2">
      <template v-for="(todo, index) in todos" :key="index">
        <div class="flex content-center items-center mb-2">
          <li class="flex">
            <template v-if="editingId === index && isEditing"
              ><input
                class="w-32 border-2"
                :value="todo"
                @change="(event) => handleChange(event.target.value)"
                v-focus
                type="text"
              />
              <button
                @click="handleSave(index)"
                class="bg-lime-600 rounded-md px-2 text-white ml-4 mb text-justify w-16"
              >
                Save
              </button></template
            >

            <template v-else>
              <p class="w-32">
                {{ todo }}
              </p>
              <button
                @click="handleEdit(index)"
                class="bg-lime-600 rounded-md px-2 text-white ml-4 mb text-justify w-16"
              >
                Edit
              </button>
            </template>
          </li>
          <button
            @click="handleDelete(index)"
            class="bg-red-700 rounded-md px-2 text-white ml-4 mb text-justify w-16"
          >
            Delete
          </button>
        </div>
      </template>
    </ul>
    <div>
      <input class="border-2" v-model="todo" />
      <button
        @click="handleAdd(todo)"
        class="bg-green-700 rounded-md px-2 text-white mt-6 ml-4"
      >
        Add todo
      </button>
    </div>
  </div>
</template>
