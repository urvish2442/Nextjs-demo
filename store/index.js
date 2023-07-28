import { configureStore } from "@reduxjs/toolkit";
import checkBoxReducer from './slices/checkBoxSlice'
import radioReducer from './slices/radioSlice'
import numberReducer from './slices/numberSlice'
import textReducer from './slices/textSlice'
import authReducer from './slices/authSlice'
import stepperReducer from './slices/stepperSlice'

export const store = configureStore ({
    reducer: {
        checkBox : checkBoxReducer,
        radio : radioReducer,
        number : numberReducer,
        text : textReducer,
        auth : authReducer,
        stepper : stepperReducer
    },
})