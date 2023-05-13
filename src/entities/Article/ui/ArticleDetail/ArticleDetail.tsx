import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selector/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetail.module.scss';

interface ArticleDetailProps {
    className?: string;
    id: string;
}

const reducers:ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetail = memo((props: ArticleDetailProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlocks = useCallback(
        (block:ArticleBlock, index:number) => {
            switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={String(index)} className={cls.block} block={block} />;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={String(index)} className={cls.block} block={block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={String(index)} className={cls.block} block={block} />;
            default:
                return null;
            }
        },
        [],
    );

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
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
            <div className={classNames(cls.ArticleDetail, {}, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar className={cls.avatar} src={article?.img} alt={article?.title} />
                </div>
                <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
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
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    );
});
