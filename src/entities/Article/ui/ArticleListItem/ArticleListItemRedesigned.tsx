import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleListItemRedesigned.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { ArticleView, ArticleBlockType } from '../../model/consts/consts';
import { ArticleTextBlock } from '../../model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleListItemProps } from './articleListItemProps';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation();
    const types = (
        <Text text={article.type?.join(', ')} className={cls.types} />
    );
    const views = (
        <>
            <Icon Svg={EyeIcon} className={cls.infoText} />
            <Text text={String(article.views)} className={cls.infoText} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItemRedesigned, {}, [
                    className,
                    cls[view],
                    cls.card,
                ])}
            >
                <VStack max gap="16">
                    <HStack max gap="8">
                        <Avatar src={article.user?.avatar} size={33} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text text={article.title} bold />
                    <Text size="s" text={article.subtitle} />
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                        errorFallback={renderErrorFallback()}
                        fallback={<Skeleton width="100%" height={250} />}
                    />
                    {textBlock.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        <HStack gap="8">{views}</HStack>
                    </HStack>
                </VStack>
            </Card>
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
