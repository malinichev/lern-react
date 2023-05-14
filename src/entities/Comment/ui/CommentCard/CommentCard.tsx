import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';

interface CommentCardProps {
    className?: string;
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.skeleton} width={30} height={30} border="50%" />
                    <Skeleton className={cls.skeleton} width={50} height={16} />
                </div>
                <Skeleton className={cls.skeleton} width="100%" height={16} />
                <Skeleton className={cls.skeleton} width="80%" height={16} />
                <Skeleton className={cls.skeleton} width="60%" height={16} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user?.avatar && <Avatar size={20} src={comment.user.avatar} />}
                <Text text={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
