import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../service/fetchCommentsByArticleId/fetchCommentsByArticleId';

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailPage?.comments || articleDetailsCommentsAdapter.getInitialState(),
);

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                articleDetailsCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
