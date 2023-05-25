import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';

import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from 'entities/Article/model/types/article';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const navigete = useNavigate();
    const { t } = useTranslation();
    const types = <Text text={article.type?.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.infoText} />
            <Icon Svg={EyeIcon} className={cls.infoText} />
        </>
    );

    const onOpenArticle = useCallback(() => {
        navigete(RoutePath.articles_details + article.id);
    }, [navigete, article.id]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
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
                            <Avatar
                                className={cls.avatarImage}
                                src={article.user?.avatar}
                                size={33}
                            />
                            <Text text={article.user.username} className={cls.username} />
                        </div>
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <Text
                        size={TextSize.L}
                        text={article.title}
                        className={cls.titleBig}
                    />
                    {types}
                    <div
                        style={{ backgroundImage: `url(${article.img})` }}
                        className={cls.image}
                    />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
                        <div className={cls.viewsNumber}>{views}</div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.image} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.subtitleWrapper}>
                    {types}
                    <div className={cls.viewsNumber}>{views}</div>
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
