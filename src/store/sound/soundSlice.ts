import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SoundState {
    isActive : boolean
}

const initialState = {
    isActive : false
} as SoundState

const soundSlice = createSlice({
    name: "sound",
    initialState,
    reducers : {
        setSound(state: SoundState, action: PayloadAction<boolean>) {
            state.isActive = action.payload;
        }
    }
})


export const {setSound} = soundSlice.actions;
export default soundSlice.reducer;