import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a user
export interface IUser {
    name: string;
    email: string;
}

// Initial state is an array of users
const initialState: IUser[] = [];

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.push(action.payload);
        },
        addUsers: (state, action: PayloadAction<IUser[]>) => {
            state.push(...action.payload);
        },
        removeUser: (state, action: PayloadAction<number>) => {
            return state.filter((_, index) => index !== action.payload);
        },
        updateUser: (state, action: PayloadAction<{ index: number; user: IUser }>) => {
            const { index, user } = action.payload;
            if (index >= 0 && index < state.length) {
                state[index] = user;
            }
        },
    },
});

export const { addUser, removeUser, updateUser, addUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
