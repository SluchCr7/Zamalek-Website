import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message : ""
}

const registerSlice = createSlice({
    name: "register",
    initialState: initialState,
    reducers: {
        register : (state , payload) => {
            state.message = payload.payload
        }
    }
})

const registerReducer = registerSlice.reducer
const registerAction = registerSlice.actions

export {registerAction ,registerReducer}