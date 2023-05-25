import { classNames } from 'shared/lib/classNames/classNames';

import {
    fetchProfileData,
    profileReducer,
    ProfileCard,
    profileActions,
    getProfileIsLoading,
    getProfileError,
    getProfileIsReadOnly,
    getProfileValidateErrors,
} from 'entities/Profile';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { useSelector } from 'react-redux';

import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Country, Currency } from 'shared/const/common';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import ProfilePageHeader from './ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileIsReadOnly);
    const validateError = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    const validateErrorTranslate = {
        [ValidateProfileErrors.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileErrors.NO_DATA]: t('Ошибка Нет данных'),
        [ValidateProfileErrors.INCORRECT_USER_COUNTRY]: t(
            'Ошибка не выбрана страна',
        ),
        [ValidateProfileErrors.INCORRECT_USER_AGE]: t(
            'Ошибка неправильный возраст',
        ),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
            'Ошибка неправильные данные пользователя',
        ),
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateError
          && validateError.length > 0
          && validateError.map((error) => (
              <Text
                  key={error}
                  theme={TextTheme.ERROR}
                  text={validateErrorTranslate[error]}
              />
          ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
