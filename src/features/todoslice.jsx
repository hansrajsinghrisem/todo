import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(to=> to.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(to => to.id === action.payload.id ? action.payload : to)
        },
        

    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer

