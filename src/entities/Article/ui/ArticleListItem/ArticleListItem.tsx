import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation();
    const types = (
        <Text text={article.type?.join(', ')} className={cls.types} />
    );
    const views = (
        <>
            <Text text={String(article.views)} className={cls.infoText} />
            <Icon Svg={EyeIcon} className={cls.infoText} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                    cls.card,
                ])}
            >
                <Card>
                    <div className={cls.header}>
                        <div className={cls.avatarWrap}>
                            <Avatar
                                className={cls.avatarImage}
                                src={article.user?.avatar}
                                size={33}
                            />
                            <Text
                                text={article.user.username}
                                className={cls.username}
                            />
                        </div>
                        <Text
                            text={article.createdAt}
                            className={cls.createdAt}
                        />
                    </div>
                    <Text
                        size={TextSize.L}
                        text={article.title}
                        className={cls.titleBig}
                    />
                    {types}
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                        errorFallback={renderErrorFallback()}
                        fallback={<Skeleton width="100%" height={250} />}
                    />
                    {/* <div */}
                    {/*    style={{ backgroundImage: `url(${article.img})` }} */}
                    {/*    className={cls.image} */}
                    {/* /> */}
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <HStack align="center">
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(article.id)}
                            >
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('Читать далее')}
                                </Button>
                            </AppLink>
                            <div className={cls.viewsNumber}>{views}</div>
                        </HStack>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                {/* <div */}
                {/*    className={cls.imageWrapper} */}
                {/*    style={{ backgroundImage: `url(${article.img})` }} */}
                {/* > */}
                {/* </div> */}
                <AppImage
                    src={article.img}
                    alt={article.title}
                    className={cls.imageWrapper}
                    errorFallback={renderErrorFallback()}
                    fallback={<Skeleton width={200} height={200} />}
                />
                <Text text={article.createdAt} className={cls.date} />
                <HStack align="center">
                    {types}
                    <div className={cls.viewsNumber}>{views}</div>
                </HStack>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );

    function renderErrorFallback() {
        return (
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'gray',
                }}
            />
        );
    }
});
