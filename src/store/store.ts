import {configureStore} from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice.ts";
import languageReducer from "./language/languageSlice.ts";
import soundRedudcer from "./sound/soundSlice.ts";

const store = configureStore({
    reducer: {
        project: projectReducer,
        language: languageReducer,
        sound: soundRedudcer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;