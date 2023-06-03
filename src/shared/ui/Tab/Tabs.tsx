import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabProps<T>) => {
    const {
        className, tabs, value = '', onTabClick,
    } = props;

    const handleClick = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    key={tab.value}
                    className={cls.tab}
                    onClick={handleClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
