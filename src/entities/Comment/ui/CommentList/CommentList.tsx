import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();
    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.CommentList, {}, [className])}
            >
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.CommentList, {}, [className])}
        >
            {comments.length ? (
                comments.map((comment, index) => (
                    <CommentCard
                        key={`${comment.id}-${String(index)}`}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text title={t('Комментариев нет')} />
            )}
        </VStack>
    );
});
