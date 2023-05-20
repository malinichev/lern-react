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
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchArticleById.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(fetchArticleById.fulfilled, (
        //         state,
        //         action: PayloadAction<Article>,
        //     ) => {
        //         state.isLoading = false;
        //         state.data = action.payload;
        //     })
        //     .addCase(fetchArticleById.rejected, (state, action) => {
        //         state.error = action.payload;
        //         state.isLoading = false;
        //     });
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
