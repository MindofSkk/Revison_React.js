import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from "./counterSlice"
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})