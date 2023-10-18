import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit"


//initial state
 interface User {
    id: string | undefined | null;
    displayName: string | undefined | null;
    email: string | undefined | null;
    // Add other user properties as needed
 }



export  interface UserState{ user: User | null;}

const initialState: UserState = {
    user: null,
  };

//create a slice with reducers

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setUser:(state,action:PayloadAction<User | null>)=>{
            state.user = action.payload
            // return action.payload
        }
    }
})


// Export actions and reducer

export const {setUser} = userSlice.actions;

export default configureStore({
    reducer:{
        user:userSlice.reducer,
    }
})
