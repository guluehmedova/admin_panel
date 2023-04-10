import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/crud/userSlice';
import roleReducer from './features/crud/roleSlice';
import carReducer from './features/crud/carSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfigure = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfigure, carReducer);

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        role: roleReducer,
        car: persistedReducer
    }
});

export default store;