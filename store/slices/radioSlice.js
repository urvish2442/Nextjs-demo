import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    radioValue : null,
};

export const radioSlice = createSlice ({
    name : 'radio',
    initialState,
    reducers: {
        updateRadio(state , action) {
            state.radioValue = action.payload
        }
    }
})

export const { updateRadio } = radioSlice.actions;
export default radioSlice.reducer;