import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    bookinfo:null
  },
  reducers: {
    addCars: (state, action) => {
      return {
        ...state,
        cars: action.payload,
      };
    },

    addBookInfo: (state, action) => {
      return {
        ...state,
        bookinfo: action.payload,
      };
    },
    
  },
});
export const { addCars,addBookInfo } = carSlice.actions;
// export default userSlice.reducer;
