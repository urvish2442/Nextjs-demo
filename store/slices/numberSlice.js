import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    numberValue : 0,
};

export const numberSlice = createSlice ({
    name : 'number',
    initialState,
    reducers: {
        updateNumber(state , action) {
            state.numberValue = action.payload
        }
    }
})

export const { updateNumber } = numberSlice.actions;
export default numberSlice.reducer;