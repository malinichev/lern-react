import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/service/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { fetchArticlesList } from '../model/service/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageView,
    getArticlesPageIsLoading,
    getArticlesPageError,
} from '../model/selectors/articlesPageSelectors';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback(
        (selectedView: ArticleView) => dispatch(articlesPageActions.setView(selectedView)),
        [dispatch],
    );

    const onLoadNextPart = useCallback(
        () => {
            dispatch(fetchNextArticlesPage());
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    });

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
