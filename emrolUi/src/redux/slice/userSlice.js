import  {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import authService from "../../services/Authservice"
import { setMessage } from "./messages"

const user = JSON.parse(localStorage.getItem("user"));

const initialState={
    isLoggedIn: user?true:false,
    user:user?user:null,
    entities:[],
    loading:false
}

export const login=createAsyncThunk('auth/login', async (data,thunkAPI) =>{
   try{
    const response=await authService.login(data)
    thunkAPI.dispatch(setMessage(response))
    return response}
    catch(err){

        return thunkAPI.rejectWithValue(err)
    }


})
export const signup=createAsyncThunk('auth/signup', async (data,thunkAPI) =>{
   try{
    const response=await authService.register(data)
    thunkAPI.dispatch(setMessage(response))
    return response}
    catch(err){
        return thunkAPI.rejectWithValue(err)
    }


})

export const logout = createAsyncThunk("auth/logout", async () => {
    authService.logout();
  });

const userSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.loading=true
            state.isLoggedIn = false;
        }),
        builder.addCase(login.fulfilled,(state,{payload})=>{
            state.loading=false,
            state.entities=payload
            state.isLoggedIn = true;
        }),
        builder.addCase(login.rejected,(state,action)=>{
            state.loading=false,
            state.isLoggedIn = false;
            console.log(action.payload)
        }),
        builder.addCase(signup.pending,(state)=>{
            state.loading=true
            state.isLoggedIn = false;
        }),
        builder.addCase(signup.fulfilled,(state,{payload})=>{
            state.loading=false,
            state.isLoggedIn = true;
            state.entities=payload
        }),
        builder.addCase(signup.rejected,(state,action)=>{
            state.loading=false,
            state.isLoggedIn = false;
            console.log("rejected")
        }),
        builder.addCase(logout.fulfilled,(state,action)=>{
            state.isLoggedIn = false;
            console.log("logout successful")
        })

    }

})


export const userReducer= userSlice.reducer
