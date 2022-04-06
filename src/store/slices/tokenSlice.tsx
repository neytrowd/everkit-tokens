import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IToken} from "../../types/token";

interface ITokensState {
    tokens: IToken[],
    filterCategory: string
}

const initialState: ITokensState = {
    tokens: [],
    filterCategory: 'all'
}

const tokensSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {

        loadToken(state, action: PayloadAction<IToken[]>) {
            state.tokens = action.payload
        },

        filter(state, action: PayloadAction<string>) {
            state.filterCategory = action.payload
        }

    }
})

export default tokensSlice.reducer;
export const tokenActions = tokensSlice.actions;