import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    cartIsShown: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.cartIsShown = !state.cartIsShown;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;