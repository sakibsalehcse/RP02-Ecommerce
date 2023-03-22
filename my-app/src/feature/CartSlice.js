import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  counter: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "cartName",
  initialState,

  reducers: {
    add: (state, action) => {
      return produce(state, (draftState) => {
        draftState.cart.push(action.payload);
        draftState.counter += 1;
      });
    },

    remove: (state, action) => {
      return produce(state, (draftState) => {
        draftState.cart = draftState.cart.filter(
          (item) => item.id !== action.payload
        );
        draftState.counter -= 1;
      });
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
