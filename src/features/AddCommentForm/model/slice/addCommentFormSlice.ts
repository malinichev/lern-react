import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CommentType } from 'features/AddCommentForm';

const initialState: CommentType = {
    error: undefined,
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action:PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
