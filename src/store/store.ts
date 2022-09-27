import { candyCrushSlice } from './slices/candy-crush/candy-crush.slice'

import { configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer
    }

})