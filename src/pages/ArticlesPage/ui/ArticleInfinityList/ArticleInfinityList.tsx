import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { getArticles } from '../../model/slice/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfinityListProps {
  className?: string;
}

export const ArticleInfinityList = memo((props: ArticleInfinityListProps) => {
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList isLoading={isLoading} view={view} articles={articles} />
        </div>
    );
});
