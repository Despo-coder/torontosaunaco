import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
