import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.value.push(action.payload);
    },

    addOccupation: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.occupation = action.payload.occupation;
        }
      });
    },
  },
});

export const { addCard, addOccupation } = userSlice.actions;

export default userSlice.reducer;
