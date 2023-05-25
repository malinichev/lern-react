import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        const renderArticleSkeleton = (_: number, index: number) => (
            <ArticleListItemSkeleton key={String(index)} view={view} />
        );
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {Array(view === ArticleView.BIG ? 3 : 9).fill(0).map(renderArticleSkeleton)}
            </div>
        );
    }

    const renderArticleListItem = (article: Article) => (
        <ArticleListItem key={article.id} view={view} article={article} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticleListItem) : null}
        </div>
    );
});
