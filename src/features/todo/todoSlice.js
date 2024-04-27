import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: "Working!"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',  //name is coming form redux
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, // in redux these will always be given
        removeTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        updataTodo : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id? action.payload.text : todo.text )
        }
    }
}) 

export const {addTodo, removeTodo, updataTodo} = todoSlice.actions

export default todoSlice.reducer