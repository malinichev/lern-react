import { useTranslation } from 'react-i18next';
import { memo, useCallback, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';
import { getArticleComments } from '../../models/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../models/selectors/comments';
import { addCommentForArticle } from '../../models/service/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../models/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticlesDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticlesDetailsComments = memo(
    (props: ArticlesDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const comments = useSelector(getArticleComments.selectAll);
        const isLoading = useSelector(getArticleCommentsIsLoading);
        const dispatch = useAppDispatch();

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchCommentsByArticleId(id));
            }
        });

        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Комментарии')} />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList isLoading={isLoading} comments={comments} />
            </VStack>
        );
    },
);
