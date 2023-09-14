import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import TodoList from "../components/TodoList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/todos",
        name: "Todos",
        component: TodoList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router