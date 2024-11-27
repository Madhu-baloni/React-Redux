// import {createStore} from  'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterStore.jsx';
import headerReducer from './header.jsx';
// import cartSlice from './cart.jsx'
import authReducer from './auth.jsx';

const store = configureStore({
    reducer : {counter:counterReducer, auth:authReducer, header:headerReducer, },
});




export default store;