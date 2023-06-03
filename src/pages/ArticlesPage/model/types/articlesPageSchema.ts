import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesSortField, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';

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
