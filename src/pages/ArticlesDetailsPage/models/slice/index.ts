import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailPageSchema } from 'pages/ArticlesDetailsPage';
import {
    articleDetailsRecommendationReducer,
} from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
