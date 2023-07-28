import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: '',
};


export const stepperSlice = createSlice({
    name: 'stepper',
    initialState,
    reducers: {
        updateStepper(state , action) {
            const payload = action.payload;
            Object.entries(payload).forEach(([key, value]) => {
              state[key] = value;
            });
        },
    },
});

export const { updateStepper } = stepperSlice.actions;
export default stepperSlice.reducer;
