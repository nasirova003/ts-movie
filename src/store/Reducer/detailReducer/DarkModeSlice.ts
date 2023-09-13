import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const tasks: any = localStorage.getItem('mode')

interface IState {
    mode: any
    value: string
}

const initialState: IState = {
    mode: JSON.parse(tasks) || [],
    value: ''
}

export const darkModeSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        toggleDarkMode(state, action: PayloadAction<any>) {
            state.mode = !state.mode

        },
    }
})



export const {toggleDarkMode} = darkModeSlice.actions
export default darkModeSlice.reducer;