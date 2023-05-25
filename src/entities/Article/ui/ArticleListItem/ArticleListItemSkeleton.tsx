import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from 'entities/Article/model/types/article';

import { Card } from 'shared/ui/Card/Card';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                        cls.card,
                    ])}
                >
                    <Card>
                        <div className={cls.header}>
                            <div className={cls.avatarWrap}>
                                <Skeleton
                                    width={33}
                                    height={33}
                                    border="50%"
                                    className={cls.avatarImage}
                                />
                                <Skeleton width={200} height={15} />
                            </div>
                            <Skeleton width={150} height={15} className={cls.createdAt} />
                        </div>
                        <Skeleton
                            width={250}
                            height={20}
                            className={cls.skeletonMarginTop}
                        />
                        <Skeleton
                            width={350}
                            height={20}
                            className={cls.skeletonMarginTop}
                        />
                        <Skeleton
                            width="100%"
                            height={178}
                            className={cls.skeletonMarginTop}
                        />
                        <Skeleton
                            width="90%"
                            height={15}
                            className={cls.skeletonMarginTop}
                        />
                        <Skeleton
                            width="80%"
                            height={15}
                            className={cls.skeletonMarginTop}
                        />
                        <Skeleton
                            width="100%"
                            height={15}
                            className={cls.skeletonMarginTop}
                        />
                        <Skeleton
                            width="90%"
                            height={15}
                            className={cls.skeletonMarginTop}
                        />
                        <div className={cls.footer}>
                            <Skeleton width={133} height={38} />
                            <Skeleton width={57} height={24} className={cls.skeletonMLauto} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.imageWrapper}>
                        <Skeleton width={200} height={200} />
                    </div>
                    <div className={cls.subtitleWrapper}>
                        <Skeleton width={125} height={20} />
                        <div className={cls.viewsNumber}>
                            <Skeleton width={50} height={20} />
                        </div>
                    </div>
                    <Skeleton width={200} height={20} className={cls.skeletonTitle} />
                </Card>
            </div>
        );
    },
);
