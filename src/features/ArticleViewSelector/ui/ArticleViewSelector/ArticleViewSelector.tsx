import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import listIcon from '@/shared/assets/icons/list-24-24.svg';
import tiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

type ButtonDataType = {
    view: ArticleView;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
};

const buttonType: ButtonDataType[] = [
    {
        view: ArticleView.BIG,
        icon: listIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: tiledIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (view: ArticleView) => () => {
        console.log('ArticleViewSelector', view);
        return onViewClick?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {buttonType.map(renderButton)}
        </div>
    );

    function renderButton(buttonData: ButtonDataType, index: number) {
        return (
            <Button
                key={String(index)}
                theme={ButtonTheme.CLEAR}
                onClick={onClick(buttonData.view)}
                disabled={buttonData.view === view}
            >
                <Icon Svg={buttonData.icon} />
            </Button>
        );
    }
});
