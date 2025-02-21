import { memo } from 'react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleListItemProps } from './articleListItemProps';

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return <ArticleListItemRedesigned {...props} />;
});
