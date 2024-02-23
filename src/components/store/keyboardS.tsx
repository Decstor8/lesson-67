import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface KeyboardState {
    password: string;
    input: string;
    accessOn: boolean;
    accessOff: boolean;
}

const initialState: KeyboardState = {
    password: '1337',
    input: '',
    accessOn: false,
    accessOff: false,
};

const keyboardS = createSlice({
    name: 'keyboard',
    initialState,
    reducers: {
        enterNumber: (state, action: PayloadAction<string>) => {
            if (state.input.length < 4) {
                state.input += action.payload;
            }
        },
        deleteNumber: (state) => {
            state.input = state.input.slice(0, -1);
        },
        checkPassword: (state) => {
            if (state.input === state.password) {
                state.accessOn = true;
            } else {
                state.accessOff = true;
            }
        },
        resetState: (state) => {
            state.input = '';
            state.accessOn = false;
            state.accessOff = false;
        },
    },
});

export const { enterNumber, deleteNumber, checkPassword, resetState } = keyboardS.actions;
export default keyboardS.reducer;
