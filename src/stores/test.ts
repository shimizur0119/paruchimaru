import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "test-data",
};

// Sliceを生成する
const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, action) => {
      return { ...state, test: action.payload };
    },
  },
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setTest } = slice.actions;
