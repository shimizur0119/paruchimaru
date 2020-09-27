import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import { firebaseReducer, actionTypes } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import testReducer from "./test"
import homeReducer from "./home"
import loginReducer from "./login"

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [actionTypes.LOGIN],
    },
  }),
]

const reducer = combineReducers({
  test: testReducer,
  home: homeReducer,
  login: loginReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

const createStore = () => configureStore({ reducer, middleware: middlewares })

export default createStore
