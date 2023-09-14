import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const todos = ref(["Play game", "Study", "Read book"]);

    const doubleCount = computed(() => count.value * 2)
    function numbertask(value) {
      count.value = value
    }
    function assigntodos(value) {
        count.value = [...value]
      }
  
    return { count,  doubleCount, numbertask }
  })