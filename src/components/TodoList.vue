<script setup>
import { computed, ref } from "vue";
import SortComp from "../components/SortComp.vue";
import SearchComp from "../components/SearchComp.vue";
import AddTodo from "../components/AddTodo.vue";
import TodoItem from "../components/TodoItem.vue";
const todo = ref("");

const searchText = ref("");

const todos = ref(["Play game", "Study", "Read book"]);

const handleAdd = function () {
  if (todo.value) {
    todos.value.push(todo.value);
  }
  todo.value = "";
};

const handleDelete = function (index) {
  if (index >= 0) {
    todos.value.splice(index, 1);
  }
};

const handleSave = function (index, editText) {
  if (editText) {
    todos.value.splice(index, 1, editText);
  }
};

const handleSort = function (value) {
  if (value === "az") {
    todos.value = todos.value.sort();
  }
  if (value === "za") {
    todos.value = todos.value.reverse();
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
        <SortComp @handle-sort="(value) => handleSort(value)"></SortComp>
      </div>

      <SearchComp v-model="searchText"></SearchComp>

      <ul
        class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        v-for="(todo, index) in result"
        :key="index"
      >
        <li
          class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
        >
          <TodoItem
            :todo="todo"
            :index="index"
            @handle-save="(value) => handleSave(index, value)"
            @handle-delete="handleDelete(index)"
          ></TodoItem>
        </li>
      </ul>
      <div class="mt-2 flex">
        <AddTodo v-model="todo" @handle-add="handleAdd()"></AddTodo>
      </div>
    </div>
  </div>
</template>
