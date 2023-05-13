import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block?.title && <Text title={block.title} className={cls.title} />}
            {block?.paragraphs && block.paragraphs.map(renderParagraph)}
        </div>
    );

    function renderParagraph(paragraph:string) {
        return <Text key={paragraph} className={cls.paragraph} text={paragraph} />;
    }
});
