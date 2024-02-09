import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailPageSchema } from '../types/index';
import { articleDetailsRecommendationReducer } from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailPageReducer =
    combineReducers<ArticleDetailPageSchema>({
        recommendations: articleDetailsRecommendationReducer,
        comments: articleDetailsCommentsReducer,
    });
