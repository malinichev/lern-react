import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    ArticleDetailsRecommendationSchema,
} from '../types/ArticleDetailsRecommendationSchema';
import {
    fetchRecommendations,
} from '../service/fetchRecommendations/fetchRecommendations';

const articleDetailsRecommendationAdapter = createEntityAdapter<Article>({
    selectId: (recommendation) => recommendation.id,
});

export const getArticleRecommendation = articleDetailsRecommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailPage?.recommendations || articleDetailsRecommendationAdapter.getInitialState(),
);

export const articleDetailsRecommendationSlice = createSlice({
    name: 'articleDetailsRecommendation',
    initialState: articleDetailsRecommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchRecommendations.fulfilled,
                (
                    state,
                    action,
                ) => {
                    state.isLoading = false;
                    articleDetailsRecommendationAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsRecommendationActions } = articleDetailsRecommendationSlice;
export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;
