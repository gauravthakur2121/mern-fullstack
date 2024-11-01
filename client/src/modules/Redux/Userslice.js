import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    username:"",
    email:""

};

export const Userslice = createSlice({
    name: "usersdata",
    initialState,
    reducers:{
        usershow : (state , action)=>{
            state.username = action.payload.user.name;
            state.email = action.payload.user.emailid;
        }
    }

})

export const {usershow} = Userslice.actions
export default Userslice.reducer