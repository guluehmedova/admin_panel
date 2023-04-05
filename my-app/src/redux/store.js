import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/crud/userSlice';
import roleReducer from './features/crud/roleSlice';
import carReducer from './features/crud/carSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        role: roleReducer,
        car: carReducer
    }
})

export default store;