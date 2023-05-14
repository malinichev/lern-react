import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading ?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();
    const { className, comments, isLoading } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {/* CommentList */}
            {comments.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.text}
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text title={t('Комментариев нет')} />}
        </div>
    );
});
