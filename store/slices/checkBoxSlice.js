import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    checkBoxValue : {}
};

export const checkBoxSlice = createSlice ({
    name : 'checkBox',
    initialState, 
    reducers: {
        updateCheckbox(state , action) {
            const { name, checked } = action.payload;
            return { ...state, checkBoxValue:{ ...state.checkBoxValue, [name]: checked } };
        }
    }
})

export const { updateCheckbox } = checkBoxSlice.actions;
export default checkBoxSlice.reducer;