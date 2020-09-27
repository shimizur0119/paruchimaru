import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosRequestConfig } from "axios"
import { db } from "../../firebase"

const initialState = {
  data: [],
  fetchData: {},
  fetchNeedDatas: [],
  dbData: [],
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
        : null
      return {
        id: e.id,
        title: e.volumeInfo.title,
        authors: e.volumeInfo.authors,
        publishedDate: e.publishedDate,
        image: imgUrl,
      }
    })
    const title_list = tmpDatas.map(e => e.title)
    const needDatas = {
      word: word,
      data: tmpDatas,
      title_list: title_list,
    }
    return [data, needDatas]
  }
)

export const getDbData = createAsyncThunk<any>("home/getDbData", async () => {
  let dbData = []
  await db
    .collection("data1")
    .get()
    .then(query => {
      query.forEach(doc => {
        const data = { ...doc.data(), id: doc.id }
        dbData.push(data)
      })
    })
  return dbData
})

export const addDbData = createAsyncThunk<any, Array<string>>(
  "home/addDbData",
  async arr => {
    const addData = arr.map(e => {
      return {
        value: e,
      }
    })
    addData.forEach(async e => {
      await db.collection("data1").add(e)
    })
    let dbData = []
    await db
      .collection("data1")
      .get()
      .then(q => {
        q.forEach(doc => {
          const data = { ...doc.data(), id: doc.id }
          dbData.push(data)
        })
      })
    return dbData
  }
)

export const deleteDbData = createAsyncThunk<any, string>(
  "home/deleteDbData",
  async id => {
    await db.collection("data1").doc(id).delete()
    let dbData = []
    await db
      .collection("data1")
      .get()
      .then(q => {
        q.forEach(doc => {
          const data = { ...doc.data(), id: doc.id }
          dbData.push(data)
        })
      })
    return dbData
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
      return { ...state, fetchData: resultData, fetchNeedDatas: needDatas }
    })
    builder.addCase(getDbData.fulfilled, (state, action) => {
      const resultData = action.payload
      return { ...state, dbData: resultData }
    })
    builder.addCase(addDbData.fulfilled, (state, action) => {
      const resultData = action.payload
      return { ...state, dbData: resultData }
    })
    builder.addCase(deleteDbData.fulfilled, (state, action) => {
      const resultData = action.payload
      return { ...state, dbData: resultData }
    })
  },
})

// Reducerをエクスポートする
export default slice.reducer

// Action Creatorsをエクスポートする
export const { addData, deleteData, resetData } = slice.actions
