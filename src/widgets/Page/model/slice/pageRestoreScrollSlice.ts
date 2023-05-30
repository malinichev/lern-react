import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageRestoreScrollSchema } from '../types/pageRestoreScroll';

const initialState: PageRestoreScrollSchema = {
    scroll: {},
};

export const pageRestoreScrollSlice = createSlice({
    name: 'pageRestoreScroll',
    initialState,
    reducers: {
        setPosition: (state, { payload }: PayloadAction<{ path:string; position:number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: pageRestoreScrollActions } = pageRestoreScrollSlice;
export const { reducer: pageRestoreScrollReducer } = pageRestoreScrollSlice;
