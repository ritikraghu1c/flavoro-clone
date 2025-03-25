import { createSlice } from "@reduxjs/toolkit";

 const CardSlice = createSlice({
    name:"card",
    initialState:{
        card: [],
    },
    reducers:{
       addToCard : (state , action)=>{
         const existingItem=state.card.find ((item)=>item.id===action.payload.id)
         if( existingItem){
            state.card=state.card.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
         }
         else{
            
         
        state.card.push(action.payload)
       }
      },
       removeFromCard:(state,action)=>{
      state.card=  state.card.filter((item)=>item.id !== action.payload.id);
       },
       incrementQty:(state,action)=>{
         state.card=state.card.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
       },
       decrementQty:(state,action)=>{
         state.card=state.card.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)
       }
    },
 });
 export const{ addToCard,removeFromCard,incrementQty,decrementQty}=CardSlice.actions;
 export default CardSlice.reducer;