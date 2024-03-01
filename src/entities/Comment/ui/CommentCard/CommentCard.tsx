import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { HStack } from '@/shared/ui/deprecated/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                data-testid="CommentCard.Loading"
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <HStack gap="4" align="center">
                        <Skeleton
                            className={cls.skeleton}
                            width={30}
                            height={30}
                            border="50%"
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width={50}
                            height={16}
                        />
                    </HStack>
                </div>
                <Skeleton className={cls.skeleton} width="100%" height={16} />
                <Skeleton className={cls.skeleton} width="80%" height={16} />
                <Skeleton className={cls.skeleton} width="60%" height={16} />
            </div>
        );
    }
    if (!comment) return null;

    return (
        <div
            data-testid="CommentCard.Content"
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user?.avatar && (
                    <Avatar size={20} src={comment.user.avatar} />
                )}
                <Text text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
});
