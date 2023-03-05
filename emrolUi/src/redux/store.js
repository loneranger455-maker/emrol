import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./slice/userSlice"
import {messageReducer} from "./slice/messages"


export const store=configureStore(
{
    reducer:{
        auth:userReducer,
        message: messageReducer

    },
    devTools: true,

}

)