import React from "react"
import { Provider } from "react-redux"
import {
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import createStore from "./src/stores"

import firebase from 'gatsby-plugin-firebase'
import 'firebase/auth'
import 'firebase/firestore'

import { createFirestoreInstance } from 'redux-firestore'


const store = createStore()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase: typeof window !== "undefined" ? firebase : {},
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}



const WrapElement = ({ element }) => {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          {element}
        </ReactReduxFirebaseProvider>
      </Provider>
    </>

  )
}


export default WrapElement