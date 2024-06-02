import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILoadingState {
    loadingState: boolean;
}

const initialState: ILoadingState = {
    loadingState: false,
};

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoadingState: (state, action: PayloadAction<boolean>) => {
            state.loadingState = action.payload;
        },
    },
});

export const { setLoadingState } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;