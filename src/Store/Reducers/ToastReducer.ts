import {createReducer, createAction, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
    display: boolean,
    message: string
}

type Action = {
    message: string,
}

const initialState : InitialState = {
    display: false,
    message: ''
}

const displayMessage = createAction<Action>('DISPLAY_MESSAGE');
const hideMessage = createAction<void>('HIDE_MESSAGE');

const toastReducer = createReducer(initialState, builder => {
    builder
        .addCase(displayMessage, (state: InitialState, action : PayloadAction<Action>) => {
            state.display = true;
            state.message = action.payload.message;
        })
        .addCase(hideMessage, (state) => {
            state.display = false;
            state.message = '';
        })
});

export default toastReducer;