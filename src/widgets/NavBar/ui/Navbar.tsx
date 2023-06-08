import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const navigate = useNavigate();
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

    const toNewArticle = useCallback(() => {
        navigate(`${RoutePath.articles_details_new}`);
    }, [navigate]);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text className={cls.appTitle} theme={TextTheme.INVERTED} title={t('Sergey App')} />

            {authData ? (
                <>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.newArticle}
                        onClick={toNewArticle}
                    >
                        {t('Создать новую статью')}
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={logOut}
                    >
                        {t('Выйти')}
                    </Button>
                </>
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
        </header>
    );
});
