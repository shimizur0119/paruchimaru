import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { navigate } from "@reach/router"

const initialState = {
  data: "",
}

// Sliceを生成する
const slice = createSlice({
  name: "login",
  initialState,
  reducers: {},
})

// Reducerをエクスポートする
export default slice.reducer

// Action Creatorsをエクスポートする
export const {} = slice.actions
