import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logoutUser: (state, action) => {
      return {
        ...state,
        user:null
      };
    },
  },
});
export const { addUser, logoutUser } = userSlice.actions;
// export default userSlice.reducer;
