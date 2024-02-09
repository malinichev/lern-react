import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticlesSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    hasMore: boolean;
    page: number;
    limit: number;

    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticlesSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
