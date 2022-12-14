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
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username
            };
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.profile = {};
            state.isAuthenticated = false;
        }
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;