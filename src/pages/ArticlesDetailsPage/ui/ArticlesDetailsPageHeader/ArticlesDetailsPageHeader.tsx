import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { canEditArticle } from '../../models/selectors/article';
import cls from './ArticlesDetailsPageHeader.module.scss';

interface ArticlesDetailsPageHeaderProps {
  className?: string;
}

export const ArticlesDetailsPageHeader = memo(
    (props: ArticlesDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const canEdit = useSelector(canEditArticle);
        const article = useSelector(getArticleDetailsData);
        const navigate = useNavigate();

        const backToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const toEditArticle = useCallback(() => {
            navigate(`${RoutePath.articles}/${article?.id}/edit`);
        }, [article?.id, navigate]);

        return (
            <HStack
                justify="between"
                className={classNames(cls.ArticlesDetailsPageHeader, {}, [className])}
            >
                <Button onClick={backToList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        onClick={toEditArticle}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Редактировать статью')}
                    </Button>
                )}
            </HStack>
        );
    },
);
