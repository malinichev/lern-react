import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/useDynamicModuleLoader';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo, useCallback } from 'react';
import { loginAction, loginReducer } from '../../model/slice/LoginSlice';
import {
    getError, getIsLoading,
    getPassword, getUserName, loginByUserName,
} from '../../model';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialsReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(initialsReducers, true);

    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);
    const password = useSelector(getPassword);
    const username = useSelector(getUserName);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                value={username}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                value={password}
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
