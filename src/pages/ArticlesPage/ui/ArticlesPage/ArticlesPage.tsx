import { memo, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { articlesPageReducer } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { initArticlesPages } from '../../model/service/initArticlesPages/initArticlesPages';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();

    const [searchParam] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(initArticlesPages(searchParam));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="ArticlesPage"
                className={classNames(cls.ArticlesPage, {}, [])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <ArticleInfinityList />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
