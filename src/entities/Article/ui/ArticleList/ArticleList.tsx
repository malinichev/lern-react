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

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticleListItem) : null}
            {isLoading && renderSkeleton()}
        </div>
    );

    function renderArticleListItem(article: Article, index:number) {
        return <ArticleListItem key={`${article.id}-${index}`} view={view} article={article} />;
    }

    function renderSkeleton() {
        const renderArticleSkeleton = (_: number, index: number) => (
            <ArticleListItemSkeleton key={String(index)} view={view} />
        );
        return Array(view === ArticleView.BIG ? 3 : 9).fill(0).map(renderArticleSkeleton);
    }
});
