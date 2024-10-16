import { configureStore } from "@reduxjs/toolkit";

import {authReducer} from "./apiSlice/authSlice";
import {registerReducer} from "./apiSlice/registerSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        register : registerReducer
    },
});

export default store