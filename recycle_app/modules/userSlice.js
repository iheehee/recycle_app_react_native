import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initailState: {
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        logIn(state, action) {
            
        }
    }
})