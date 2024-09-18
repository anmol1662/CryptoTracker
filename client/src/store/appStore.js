import { configureStore } from '@reduxjs/toolkit'
import watchlistReducer from './watchlistSlice'
import userReducer from './userSlice'
// import filtersReducer from '../features/filters/filtersSlice'

export const appStore = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    user: userReducer
    // filters: filtersReducer,
  }
})