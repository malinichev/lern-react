import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    useEffect(() => {
        if (authData) {
            onClose();
        }
    }, [authData, onClose]);

    const openModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const logOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {authData ? (
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={logOut}
                >
                    {t('Выйти')}
                </Button>
            ) : (
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={openModal}
                >
                    {t('Войти')}
                </Button>
            )}
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onClose}
                />
            )}
        </div>
    );
};
