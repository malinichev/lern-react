import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';

import { getError } from 'features/AuthByUsername/model/selector/getError/getError';
import { getIsLoading } from 'features/AuthByUsername/model/selector/getIsLoading/getIsLoading';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/useDynamicModuleLoader';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo } from 'react';
import { loginAction, loginReducer } from '../../model/slice/LoginSlice';
import {
    getPassword, getUserName,
} from '../../model';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
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

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                value={username}
                onChange={handleUserName}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                value={password}
                className={cls.input}
                onChange={handlePassword}
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={handleClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );

    function handlePassword(value:string) {
        dispatch(loginAction.setPassword(value));
    }

    function handleUserName(value:string) {
        dispatch(loginAction.setUserName(value));
    }

    async function handleClick() {
        const res = await dispatch(loginByUserName({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }
});

export default LoginForm;
