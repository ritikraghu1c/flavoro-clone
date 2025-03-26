import { configureStore } from '@reduxjs/toolkit'
import CardSlice from "./slices/CardSlice";
import  Categoryslice  from './slices/CategorySlice';
import SearchSlice from './slices/SearchSlices'

const Store = configureStore({
    reducer : {
        card : CardSlice,
       category:  Categoryslice,
       search:SearchSlice,
        
    },
});

export default Store;