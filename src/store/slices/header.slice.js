import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isSearch: false,
    isEpisodeMenuShown: false
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeSearch: (state, action) => {
            state.isSearch = action.payload;
        },
    }
})

export const {actions, reducer} = headerSlice