import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosRequestConfig } from "axios"

const initialState = {
  data: [],
  fetchData: {},
  fetchNeedDatas: [],
  errFlag: false,
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
    const data = await response.data
    const tmpDatas = await data.items.map(e => {
      const imgUrl = e.volumeInfo.readingModes.image
        ? e.volumeInfo.imageLinks.thumbnail
        : undefined
      return {
        id: e.id,
        title:
          e.volumeInfo && e.volumeInfo.title ? e.volumeInfo.title : undefined,
        authors:
          e.volumeInfo && e.volumeInfo.authors
            ? e.volumeInfo.authors
            : undefined,
        co:
          e.volumeInfo && e.volumeInfo.publisher
            ? e.volumeInfo.publisher
            : undefined,
        releaseDate:
          e.volumeInfo && e.volumeInfo.publishedDate
            ? e.volumeInfo.publishedDate
            : undefined,
        img: imgUrl,
        description:
          e.searchInfo && e.searchInfo.textSnippet
            ? e.searchInfo.textSnippet
            : undefined,
      }
    })
    const title_list = tmpDatas.map(e => e.title)
    const needDatas = {
      totalItems: data.totalItems,
      word: word,
      data: tmpDatas,
      title_list: title_list,
    }
    return [data, needDatas]
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
    resetData: state => {
      return { ...state, data: [] }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetch1.fulfilled, (state, action) => {
      const [resultData, needDatas] = action.payload
      return {
        ...state,
        fetchData: resultData,
        fetchNeedDatas: needDatas,
        errFlag: false,
      }
    })
    builder.addCase(fetch1.rejected, state => {
      return { ...state, errFlag: true }
    })
  },
})

// Reducerをエクスポートする
export default slice.reducer

// Action Creatorsをエクスポートする
export const { addData, deleteData, resetData } = slice.actions
