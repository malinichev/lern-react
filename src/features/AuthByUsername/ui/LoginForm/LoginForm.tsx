import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonOld,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input as InputOld } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text as TextOld, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { loginAction, loginReducer } from '../../model/slice/LoginSlice';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
    loginByUserName,
} from '../../model';

import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

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
    const forceUpdate = useForceUpdate();

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
            forceUpdate();
        }
    }, [dispatch, username, password, onSuccess, forceUpdate]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        className={classNames(cls.LoginForm, {}, [className])}
                        gap="16"
                        justify="end"
                    >
                        <Text title={t('Форма авторизации')} />

                        <Input
                            autofocus
                            type="text"
                            value={username}
                            onChange={onChangeUsername}
                            placeholder={t('Введите username')}
                        />
                        <Input
                            type="text"
                            value={password}
                            onChange={onChangePassword}
                            placeholder={t('Введите пароль')}
                        />
                        <HStack max gap="16">
                            {error && (
                                <Text
                                    text={t(
                                        'Вы ввели неверный логин или пароль',
                                    )}
                                    variant="error"
                                />
                            )}
                            <Button
                                variant="outline"
                                onClick={onLoginClick}
                                disabled={isLoading}
                                className={cls.loginBtnRedesigned}
                            >
                                {t('Войти')}
                            </Button>
                        </HStack>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <VStack>
                            <TextOld title={t('Форма авторизации')} />
                            {error && (
                                <TextOld
                                    text={t(
                                        'Вы ввели неверный логин или пароль',
                                    )}
                                    theme={TextTheme.ERROR}
                                />
                            )}
                            <InputOld
                                autofocus
                                type="text"
                                className={cls.input}
                                value={username}
                                onChange={onChangeUsername}
                                placeholder={t('Введите username')}
                            />
                            <InputOld
                                type="text"
                                value={password}
                                className={cls.input}
                                onChange={onChangePassword}
                                placeholder={t('Введите пароль')}
                            />
                            <ButtonOld
                                theme={ButtonTheme.OUTLINE}
                                className={cls.loginBtn}
                                onClick={onLoginClick}
                                disabled={isLoading}
                            >
                                {t('Войти')}
                            </ButtonOld>
                        </VStack>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
