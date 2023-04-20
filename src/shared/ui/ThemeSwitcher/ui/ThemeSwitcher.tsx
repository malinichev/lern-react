import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import Icon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <Icon className={classNames(cls.icon)} />
        </Button>
    );
});
