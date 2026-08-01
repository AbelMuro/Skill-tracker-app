import {combineReducers} from '@reduxjs/toolkit';
import toastReducer from './ToastReducer';

const rootReducer = combineReducers({
    toast: toastReducer
});

export default rootReducer;