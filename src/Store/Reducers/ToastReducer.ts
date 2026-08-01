import {createReducer, createAction} from '@reduxjs/toolkit';

type InitialState = {
    display: boolean,
    message: string
}

type Action = {
    payload: any
}

const initialState : InitialState = {
    display: false,
    message: ''
}

const displayMessage = createAction('DISPLAY_MESSAGE');

const toastReducer = createReducer(initialState, builder => {
    builder.addCase(displayMessage, (state : InitialState, action : Action) => {
        state.display = true;
        state.message = action.payload.message;
    })
});

export default toastReducer;