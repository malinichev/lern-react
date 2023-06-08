import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { canEditArticle } from 'pages/ArticlesDetailsPage/models/selectors/article';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticlesDetailsPageHeader.module.scss';

interface ArticlesDetailsPageHeaderProps {
    className?: string;
}

export const ArticlesDetailsPageHeader = memo((props: ArticlesDetailsPageHeaderProps) => {
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
        <div className={classNames(cls.ArticlesDetailsPageHeader, {}, [className])}>
            <Button onClick={backToList} theme={ButtonTheme.OUTLINE}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button onClick={toEditArticle} className={cls.editButton} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать статью')}
                </Button>
            )}
        </div>
    );
});
