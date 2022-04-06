import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import tokenSlice from "./slices/tokenSlice";


const rootReducer = combineReducers({
    tokens: tokenSlice
})

export const store = configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
