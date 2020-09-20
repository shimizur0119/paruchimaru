import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"

import testReducer from "./test"
import homeReducer from "./home"

const middlewares = [...getDefaultMiddleware()]

const reducer = combineReducers({
  test: testReducer,
  home: homeReducer,
})

const store = configureStore({ reducer, middleware: middlewares })

export default store
