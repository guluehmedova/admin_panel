import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/crud/userSlice';
import roleReducer from './features/crud/roleSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        role: roleReducer
    }
})

export default store;