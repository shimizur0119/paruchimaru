import React from "react"
import { Provider } from "react-redux"
import {
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import createStore from "./src/stores"

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { createFirestoreInstance } from 'redux-firestore'

const store = createStore()

const firebaseConfig = {
  apiKey: "AIzaSyAzdXlRZNwJ8ooAVUkyP3K3qFBz5AUMzHg",
  authDomain: "develop-542b4.firebaseapp.com",
  databaseURL: "https://develop-542b4.firebaseio.com",
  projectId: "develop-542b4",
  storageBucket: "develop-542b4.appspot.com",
  messagingSenderId: "103556982071",
  appId: "1:103556982071:web:d591790e3aa5ba309026b2",
  measurementId: "G-XBY49G66PW"
};

firebase.initializeApp(firebaseConfig);

const rrfConfig = {
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance
}

export default ({ element }) => {
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
