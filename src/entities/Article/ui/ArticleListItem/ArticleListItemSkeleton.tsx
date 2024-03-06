import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { ArticleView } from '../../model/consts/consts';
import clsDeprecated from './ArticleListItem.module.scss';
import clsRedesigned from './ArticleListItemRedesigned.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const mainClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => clsRedesigned.ArticleListItemRedesigned,
            off: () => clsDeprecated.ArticleListItem,
        });
        const Card = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => CardRedesigned,
            off: () => CardDeprecated,
        });
        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

        const itemClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => clsRedesigned,
            off: () => clsDeprecated,
        });

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        itemClass[view],
                        itemClass.card,
                    ])}
                >
                    <Card className={itemClass.card}>
                        <div className={itemClass.header}>
                            <Skeleton border="50%" height={30} width={30} />
                            <Skeleton
                                width={150}
                                height={16}
                                className={itemClass.skeletonMarginTop}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={itemClass.skeletonMarginTop}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={itemClass.skeletonMarginTop}
                        />
                        <Skeleton
                            height={200}
                            className={itemClass.skeletonMarginTop}
                        />
                        <div className={itemClass.footer}>
                            <Skeleton
                                height={36}
                                width={200}
                                className={itemClass.skeletonMarginTop}
                            />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(mainClass, {}, [
                    className,
                    itemClass[view],
                ])}
            >
                <Card padding="0" className={itemClass.card}>
                    <div className={itemClass.imageWrapper}>
                        <Skeleton width={240} height={140} />
                    </div>
                    <div className={itemClass.subtitleWrapper}>
                        <Skeleton width={125} height={20} />
                        <div className={itemClass.skeletonMarginTop}>
                            <Skeleton width={50} height={20} />
                        </div>
                    </div>
                    <Skeleton
                        width={200}
                        height={20}
                        className={itemClass.skeletonTitle}
                    />
                </Card>
            </div>
        );
    },
);
