import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Text as TextNew } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonOld } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonNew } from '@/shared/ui/redesigned/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Avatar as AvatarNew } from '@/shared/ui/redesigned/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Icon as IconNew } from '@/shared/ui/redesigned/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selector/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetail.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleDetailProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetail = memo((props: ArticleDetailProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonNew,
        off: () => SkeletonOld,
    });

    const renderBlocks = useCallback((block: ArticleBlock, index: number) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={String(index)}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={String(index)}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={String(index)}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text title={t('Ошибка')} align={TextAlign.CENTER} />;
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        data-testid="ArticleDetail.Info"
                        className={classNames(cls.ArticleDetail, {}, [
                            className,
                        ])}
                    >
                        <div className={cls.avatarWrapper}>
                            <AvatarNew
                                className={cls.avatar}
                                src={article?.img}
                                alt={article?.title}
                            />
                        </div>
                        <TextNew
                            data-testid="Title"
                            title={article?.title}
                            text={article?.subtitle}
                            size="l"
                        />
                        <div className={cls.articleInfo}>
                            <IconNew className={cls.icons} Svg={EyeIcon} />
                            <TextNew text={String(article?.views)} />
                        </div>
                        <div className={cls.articleInfo}>
                            <IconNew className={cls.icons} Svg={CalendarIcon} />
                            <TextNew text={String(article?.createdAt)} />
                        </div>
                        {article?.blocks.map(renderBlocks)}
                    </div>
                }
                off={
                    <div
                        data-testid="ArticleDetail.Info"
                        className={classNames(cls.ArticleDetail, {}, [
                            className,
                        ])}
                    >
                        <div className={cls.avatarWrapper}>
                            <Avatar
                                className={cls.avatar}
                                src={article?.img}
                                alt={article?.title}
                            />
                        </div>
                        <Text
                            data-testid="Title"
                            title={article?.title}
                            text={article?.subtitle}
                            size={TextSize.L}
                        />
                        <div className={cls.articleInfo}>
                            <Icon className={cls.icons} Svg={EyeIcon} />
                            <Text text={String(article?.views)} />
                        </div>
                        <div className={cls.articleInfo}>
                            <Icon className={cls.icons} Svg={CalendarIcon} />
                            <Text text={String(article?.createdAt)} />
                        </div>
                        {article?.blocks.map(renderBlocks)}
                    </div>
                }
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    );
});
