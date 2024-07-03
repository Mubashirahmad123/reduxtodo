import { createSlice, nanoid } from '@reduxjs/toolkit'



const initialState = {
    todos: [{id:1, text:"hello"}]

};



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("Adding todo:", action.payload)

            const Todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push( Todo)
            console.log("Updated todos:", state.todos); // Log updated todos array

        },
        removeTodo: (state, action) => {
            console.log("Removing todo with id:", action.payload); // Log the id being removed

            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            console.log("Updatedfff todos:", state.todos); // Log updated todos array


        },

    }


})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
