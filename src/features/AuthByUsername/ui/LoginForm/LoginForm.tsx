import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { loginAction, loginReducer } from '../../model/slice/LoginSlice';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
    loginByUserName,
} from '../../model';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const reducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginAction.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginAction.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <VStack>
                    <Text title={t('Форма авторизации')} />
                    {error && (
                        <Text
                            text={t('Вы ввели неверный логин или пароль')}
                            theme={TextTheme.ERROR}
                        />
                    )}
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
                </VStack>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
