import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartIsShown: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.cartIsShown = !state.cartIsShown;
        }
    }
});

export const cartActions = uiSlice.actions;
export default uiSlice.reducer;