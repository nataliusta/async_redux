import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isShownCart: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        show(state) {
            state.isShownCart = true;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;