import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

import { AddCommentForm } from 'features/AddCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';

import { articleDetailPageReducer } from '../models/slice';
import { getArticleRecommendationIsLoading } from '../models/selectors/recommendations';
import { fetchRecommendations } from '../models/service/fetchRecommendations/fetchRecommendations';
import {
    getArticleRecommendation,
} from '../models/slice/articleDetailsRecommendationSlice';
import { addCommentForArticle } from '../models/service/addCommentForArticle/addCommentForArticle';
import cls from './ArticlesDetailsPage.module.scss';
import {
    getArticleComments,
} from '../models/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../models/selectors/comments';
import { fetchCommentsByArticleId } from '../models/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

const reducers: ReducersList = {
    articleDetailPage: articleDetailPageReducer,
};

const ArticlesDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendation.selectAll);
    const isRecommendationLoading = useSelector(
        getArticleRecommendationIsLoading,
    );
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const backToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchRecommendations());
    });

    if (!id && __PROJECT__ !== 'storybook') {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [])}>
                <Button onClick={backToList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetail
                    id={__PROJECT__ === 'storybook' ? '1' : (id as string)}
                />
                <Text className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList
                    target="_blank"
                    isLoading={isRecommendationLoading}
                    articles={recommendations}
                    className={cls.recommendations}
                />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
