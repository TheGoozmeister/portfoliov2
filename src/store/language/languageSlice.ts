import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import projectSlice from "../project/projectSlice";

interface LanguageState {
    language: string;
}

const initialState = {
    language: "eng"
} as LanguageState

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers : {
        setLanguage(state: LanguageState, action: PayloadAction<string>) {
            state.language = action.payload
        }
    }
})


export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;