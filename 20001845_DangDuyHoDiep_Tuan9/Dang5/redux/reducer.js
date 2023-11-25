import { createSlice } from '@reduxjs/toolkit'

export const Reducer = createSlice({
  name: 'color',
  initialState: {
    color: '#feffea',
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
    resetColor: (state) => {
      state.color = '#feffea'
    },
  },
})

export const { changeColor, resetColor } = Reducer.actions

export default Reducer.reducer
