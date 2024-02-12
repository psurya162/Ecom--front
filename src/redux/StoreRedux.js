import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cartSllice'

export default configureStore({
  reducer: {
    allCarts:cartReducer
  },
})