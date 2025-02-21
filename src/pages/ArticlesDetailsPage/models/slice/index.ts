import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { articleDetailsRecommendationReducer } from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailPageReducer = combineReducers({
    recommendations: articleDetailsRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
