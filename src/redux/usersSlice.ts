import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a user
export interface IUser {
    id: string;
    name: string;
    email: string;
}

// Initial state is an array of users
const initialState: IUser[] = [];

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // Add a single user to the array
        addUser: (state, action: PayloadAction<IUser>) => {
            const user = action.payload;
            if (!state.find(u => u.id === user.id)) {
                state.push(user);
            }
        },
        // Add multiple users to the array
        addUsers: (state, action: PayloadAction<IUser[]>) => {
            const usersToAdd = action.payload;
            usersToAdd.forEach(user => {
                if (!state.find(u => u.id === user.id)) {
                    state.push(user);
                }
            });
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
