import {createSlice} from '@reduxjs/toolkit'

 const headerSlice = createSlice({
    name:'header',
    initialState: {cartVisible:false},
    reducers : {
     toggle(state){
     state.cartVisible = !state.cartVisible
     }, 
     }

 });
export const headerActions = headerSlice.actions;
 export default  headerSlice.reducer ;
