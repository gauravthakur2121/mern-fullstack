import { configureStore } from '@reduxjs/toolkit';
import { Userslice } from './Userslice';

export const store = configureStore({
    reducer: {
        usersdata: Userslice,  
    },
});