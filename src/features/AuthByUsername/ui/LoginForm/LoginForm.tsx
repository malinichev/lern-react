import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getLoginData } from 'features/AuthByUsername/model/selector/getLoginData/getLoginData';
import { getPassword, getUserName, loginAction } from '../../model';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(getLoginData);
    const password = useSelector(getPassword);
    const username = useSelector(getUserName);

    const handlePasswordWithCallback = useCallback(
        handlePassword,
        [dispatch],
    );
    const handleUserNameWithCallback = useCallback(
        handleUserName,
        [dispatch],
    );
    const handleClickWithCallback = useCallback(
        handleClick,
        [dispatch, password, username],
    );

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                value={username}
                onChange={handleUserNameWithCallback}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                value={password}
                className={cls.input}
                onChange={handlePasswordWithCallback}
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={handleClickWithCallback}
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

    function handleClick() {
        dispatch(loginByUserName({ username, password }));
    }
};
