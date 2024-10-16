import { create } from "zustand";
import { persist } from "zustand/middleware";

const todoStore = (set, get) => ({
  todoList: [],
  add: (todo) => {
    set((state) => ({ todoList: [...state.todoList, todo] }));
  },
  edit: (id, data) => {
    const updatedTodoList = get().todoList.map((todo) =>
      todo.id === id ? { ...todo, ...data } : todo
    );
    set(() => ({
      todoList: updatedTodoList,
    }));
  },
  remove: (id) => {
    const updatedTodoList = get().todoList.filter((todo) => todo.id !== id);
    set(() => ({
      todoList: updatedTodoList,
    }));
  },
  reset: () => set(() => ({ todoList: [] })),
});

const useTodo = create(persist(todoStore, { name: "todoState" }));

export default useTodo;
