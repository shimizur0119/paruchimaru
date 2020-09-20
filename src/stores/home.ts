import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosRequestConfig } from "axios"

const initialState = {
  data: [],
  fetchData: {},
}

export const fetch1 = createAsyncThunk<any, string>(
  "home/fetch1",
  async word => {
    const axiosConf: AxiosRequestConfig = {
      baseURL: "https://www.googleapis.com/books/v1/",
      url: `./volumes?q=intitle:${word}&projection=lite&orderBy=newest&printType=books`,
      method: "get",
      timeout: 1000,
    }
    const response = await axios(axiosConf)
    return response.data
  }
)

// Sliceを生成する
const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addData: (state, action) => {
      return { ...state, data: [...state.data, action.payload] }
    },
    deleteData: (state, action) => {
      const index = action.payload
      const newData = state.data.filter((e, i) => i !== index)
      return { ...state, data: newData }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetch1.fulfilled, (state, action) => {
      const resultData = action.payload
      return { ...state, fetchData: resultData }
    })
  },
})

// Reducerをエクスポートする
export default slice.reducer

// Action Creatorsをエクスポートする
export const { addData, deleteData } = slice.actions
