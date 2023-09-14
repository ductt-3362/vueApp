<script setup>
import { computed, ref } from "vue";
import { useCounterStore } from "../store/CountTask";

const todo = ref("");\
const todos = ref([])
const foundTodos = ref("");
const isEditing = ref(false);
const editingId = ref(-1);
const editText = ref("");
const searchText = ref("");
const vFocus = {
  mounted: (el) => el.focus(),
};
const store = useCounterStore();
todos.value = [...store.todos]
computed.value = [...store.computed
store.numbertask(computed(() => {
  return todos.value.length
}));

store.assigntodos()
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
const handleSearch = function () {
  if (searchText.value) {
    foundTodos.value = todos.value.filter((item) => {
      return item.toLowerCase().includes(searchText.value);
    });
  }
};

const result = computed(() => {
  if (searchText.value) {
    return todos.value.filter((item) => {
      return item.toLowerCase().includes(searchText.value);
    });
  } else return todos.value;
});
</script>

<template>
  <div class="h-screen w-96 mx-auto justify-center flex items-center flex-col">
    <div class="p-4 rounded-lg border-2">
      <div class="flex justify-between">
        <p class="text-2xl">Todo List</p>
        <select
          name="sort"
          class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          @change="(e) => handleSort(e.target.value)"
        >
          <option value="az">A->Z</option>
          <option selected disabled hidden>Sort</option>
          <option value="za">Z->A</option>
        </select>
      </div>
      <input
        type="text"
        class="mb-2 mt-2 block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        v-model="searchText"
        @input="handleSearch"
      />
      <ul
        class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <template v-for="(todo, index) in result" :key="index">
          <div class="flex content-center items-center mb-2">
            <li
              class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <template v-if="editingId === index && isEditing">
                <div class="flex">
                  <input
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :value="todo"
                    @change="(event) => handleChange(event.target.value)"
                    v-focus
                    type="text"
                  />
                  <button
                    @click="handleSave(index)"
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
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Edit
                    </button>
                    <button
                      @click="handleDelete(index)"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </template>
            </li>
          </div>
        </template>
      </ul>
      <div class="mt-2 flex">
        <input
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="todo"
        />
        <button
          @click="handleAdd(todo)"
          class="ml-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add todo
        </button>
      </div>
    </div>
  </div>
</template>
