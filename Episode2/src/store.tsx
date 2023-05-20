import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logOut: (state) => {
            state.value = initialState.value
        }
    }
})
export const { login, logOut } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})