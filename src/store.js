import { configureStore } from "@reduxjs/toolkit";

import userReducer from './user/userSlice'
import postReducer from './Post/postSlice'

 const store = configureStore({

reducer:{

name: userReducer,
post: postReducer

}



 })

 export default store