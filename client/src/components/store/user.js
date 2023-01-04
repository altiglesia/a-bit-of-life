import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: {},
        isAuthenticated: false
    },
    reducers: {
        setUser: (state, action) => {
            state.profile = {
                email: action.payload.email,
                username: action.payload.username,
                quiz_results: action.payload.quiz_results,
                current_cable_path: action.payload.current_cable_path
            };
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.profile = {};
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;