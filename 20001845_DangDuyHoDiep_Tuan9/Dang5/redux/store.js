import { configureStore } from '@reduxjs/toolkit'
import Reducer from './reducer.js'

const store = configureStore({
  reducer: {
    theme: Reducer,
  },
})

export default store
