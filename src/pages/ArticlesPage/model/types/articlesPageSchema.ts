import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article/model/types/article';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    view: ArticleView

    // pagination
    hasMore: boolean
    page: number,
    limit?:number

    _inited:boolean
}
