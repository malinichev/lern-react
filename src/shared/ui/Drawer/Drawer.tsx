import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, lazy, children, onClose, isOpen,
    } = props;
    const { theme } = useTheme();

    const { isMounted, isClosing, close } = useModal({
        onClose,
        isOpen,
        animationDalay: 300,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
