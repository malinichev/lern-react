import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetail } from '@/entities/Article';

interface DetailsContainterProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainterProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card max border="round" className={className} padding="24">
            <ArticleDetail id={id} />
        </Card>
    );
});
