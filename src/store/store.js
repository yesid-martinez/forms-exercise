import { configureStore } from '@reduxjs/toolkit';

import formsReducer from '../features/forms/formsSlice'

const store = configureStore({
    reducer: {
        data: formsReducer,
    },
});

export default store;