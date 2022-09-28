import { candyCrushSlice } from './slices/candy-crush/candy-crush.slice'

import { configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;