import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    textValue : '',
};

export const textSlice = createSlice ({
    name : 'text',
    initialState,
    reducers: {
        updateText(state , action) {
            state.textValue = action.payload
        }
    }
})

export const { updateText } = textSlice.actions;
export default textSlice.reducer;