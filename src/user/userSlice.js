import { createSlice } from "@reduxjs/toolkit"


const initialState = {

user: {

name:'',
email:'',
password:'',

},


}


const userSlice = createSlice({

name:'user',
initialState,
reducers:{

updateName(state, action){

state.user.name = action.payload

},

updateEmail(state, action){

state.user.email = action.payload

},

updatePassword(state, action){

state.user.password = action.payload

},

ExitUser(state){

state.user = {}    

},



}


})


export const  { ExitUser ,updateEmail, updateName, updatePassword } = userSlice.actions

export default userSlice.reducer