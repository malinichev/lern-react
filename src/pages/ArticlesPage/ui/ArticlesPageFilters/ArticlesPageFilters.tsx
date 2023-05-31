import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleSortSelector,
    ArticlesSortField,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';

import { SortOrder } from 'shared/types';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const onChangeView = useCallback(
        (selectedView: ArticleView) => dispatch(articlesPageActions.setView(selectedView)),
        [dispatch],
    );
    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => dispatch(articlesPageActions.setOrder(newOrder)),
        [dispatch],
    );
    const onChangeSort = useCallback(
        (newSort: ArticlesSortField) => dispatch(articlesPageActions.setSort(newSort)),
        [dispatch],
    );

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    sort={sort}
                    order={order}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card>
                <Input placeholder={t('Поиск')} />
            </Card>
        </div>
    );
});
