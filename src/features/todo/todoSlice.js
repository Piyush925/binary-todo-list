import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
        striked: false
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    strikeTodo: (state, action) => {
        state.todos = state.todos.map((todo) => { 
            return todo.id === action.payload.id ? { ...todo, striked: action.payload.checked } : todo
        });
      },
  },
});

export const { addTodo, removeTodo, strikeTodo } = todoSlice.actions;

export default todoSlice.reducer;