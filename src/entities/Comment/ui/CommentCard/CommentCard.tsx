import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
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
    if (!comment) return null;

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={`${RoutePath.profile}${comment.id}`} className={cls.header}>
                {comment.user?.avatar && <Avatar size={20} src={comment.user.avatar} />}
                <Text text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
});