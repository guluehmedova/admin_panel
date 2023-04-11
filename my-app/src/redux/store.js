import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/crud/userSlice';
import roleReducer from './features/crud/roleSlice';
import carReducer from './features/crud/carSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    role: roleReducer,
    car: carReducer
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ["car"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;