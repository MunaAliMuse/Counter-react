import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
    name: "Counter",

    initialState:{

        Countervalue: 0,
    },
    reducers:{
        increment:(state)=>{
            state.Countervalue+=1;
        },
    
    decrement:(state)=>{
        state.Countervalue -=1;
    },
    reset:(state)=>{
        state.Countervalue=0
    }
    }
})

export const {increment, decrement,reset} = Counter.actions

export default Counter.reducer