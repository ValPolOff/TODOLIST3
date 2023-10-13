import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';

export const store = configureStore({
    reducer: {
        [api.reducerPath]:api.reducer,
        //auth
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>;

//export type AppDispatch = typeof store.dispatch;