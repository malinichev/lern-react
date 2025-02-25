import { useTranslation } from 'react-i18next';
import { memo, useCallback, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getArticleComments } from '../../models/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../models/selectors/comments';
import { addCommentForArticle } from '../../models/service/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../models/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticlesDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticlesDetailsComments = memo(
    (props: ArticlesDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
        const dispatch = useAppDispatch();

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Text size="l" title={t('Комментарии')} />
                <Suspense fallback={<Skeleton />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
