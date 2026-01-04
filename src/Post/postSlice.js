import { createSlice } from "@reduxjs/toolkit";


const initialState = {

query: '',
post: []

}


const PostSlice = createSlice({

name: 'postaction',
initialState,

reducers: {

    updatequery(state, action){

        state.query = action.payload    
        
        },

deletepost(state, action){

const item = state.post.find(post => post.id === action.payload)

item.filter(post => post.id !== action.payload)

}


}




})


export const {  updatequery , deletepost } = PostSlice.actions

export default PostSlice.reducer