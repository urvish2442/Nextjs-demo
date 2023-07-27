import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
    username : null
};

export const users = [
    { name:'urvish', email: 'urvish@gmail.com', password: '123123' },
    { name:'Urvish', email: 'r.urvish@gmail.com', password: '123123123' },
    { name:'Test', email: 'test@test.com', password: '123456'},    
  ];

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action?.payload?.creds;
            const matchedUser = users.find((user) => user.email === email && user.password === password);
            if (matchedUser) {
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.error = null;
                state.username = matchedUser.name;

            } else {
                state.isAuthenticated = false;
                state.token = null;
                state.error = 'Invalid credentials. Please try again.';
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.error = null; 
            state.username = null; 
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
