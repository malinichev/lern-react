import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';
import { ArticleListItemProps } from './articleListItemProps';

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    );
});
