// import {createSlice} from '@reduxjs/toolkit'


// const cartSlice = createSlice( {
//     name : 'cart',
//     initialValue:{
//         items : [],
//         totalQunatity:0,
//     },
//     reducers : {
//        addToCart(state, action){
//          const newItem = action.payload;
//          const exisitingItem = state.items.find((item) => item.id === newItem.id)
//          if(!exisitingItem){
//             state.item.push({
//                 itemId: newItem.id,
//                 price:newItem.price,
//                 qunatity:1,
//                 totalPrice:newItem.price,
//                 name:newItem.title
//             });
//          } else { 
//             exisitingItem.qunatity++;
//             exisitingItem.price = exisitingItem.price + newItem.price;
//          }
//        },
//        removeItem(state, action) {
//            const id = action.payload;
//            const exisitingItem = state.items.find((item) => item.id === id);
//            state.totalQunatity--;
//            state.changed = true;
//            if(exisitingItem.qunatity === 1) {
//             state.items = state.items.filter((item) => item.id !== id)
//            } else {
//             exisitingItem.qunatity--;
//             exisitingItem.totalPrice = exisitingItem.totalPrice - exisitingItem.totalPrice;
//            }
//        },
//     },
// });
// export const cartActions = cartSlice.actions;
// export default cartSlice;