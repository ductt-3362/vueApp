<script setup>
import { ref } from "vue";
const todoList = ref(["Công việc 1", "Công việc 2", "Công việc 3"]);
const todo = ref("");
const isEditing = ref(false);
const editingId = ref(-1);
const editText = ref("");
const vFocus = {
  mounted: (el) => el.focus(),
};
const addTodo = function (value) {
  if (value) {
    todoList.value.push(value);
  }
  todo.value = "";
};
const deleteTodo = function (index) {
  if (index >= 0) {
    todoList.value.splice(index, 1);
  }
};
const editTodo = function (index) {
  isEditing.value = true;
  editingId.value = index;
};
const handleChange = function (value) {
  editText.value = value;
};
const handleSave = function (index) {
  todoList.value.splice(index, 1, editText.value);
  isEditing.value = false;
};
</script>

<template>
  <div class="h-screen justify-center flex items-center flex-col">
    <span class="text-2xl">Danh sách công việc</span>
    <ul class="mt-2">
      <template v-for="(todo, index) in todoList" :key="index">
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
                Xong
              </button></template
            >

            <template v-else>
              <p class="w-32">
                {{ todo }}
              </p>
              <button
                @click="editTodo(index)"
                class="bg-lime-600 rounded-md px-2 text-white ml-4 mb text-justify w-16"
              >
                Sửa
              </button>
            </template>
          </li>
          <button
            @click="deleteTodo(index)"
            class="bg-red-700 rounded-md px-2 text-white ml-4 mb text-justify w-16"
          >
            Xóa
          </button>
        </div>
      </template>
    </ul>
    <div>
      <input class="border-2" v-model="todo" />
      <button
        @click="addTodo(todo)"
        class="bg-green-700 rounded-md px-2 text-white mt-6 ml-4"
      >
        Thêm công việc
      </button>
    </div>
  </div>
</template>
