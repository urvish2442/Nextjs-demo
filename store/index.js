import { configureStore } from "@reduxjs/toolkit";
import checkBoxReducer from './slices/checkBoxSlice'
import radioReducer from './slices/radioSlice'
import numberReducer from './slices/numberSlice'
import textReducer from './slices/textSlice'

export const store = configureStore ({
    reducer: {
        checkBox : checkBoxReducer,
        radio : radioReducer,
        number : numberReducer,
        text : textReducer,
    },
})