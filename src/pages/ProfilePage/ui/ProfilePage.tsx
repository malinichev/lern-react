import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { fetchProfileData, profileReducer, ProfileCard } from 'entities/Profile';

import { useDynamicModuleLoader, ReducersList } from 'shared/lib/useDynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useDynamicModuleLoader(reducers, true);

    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE PAGE')}
            <ProfileCard />
        </div>

    );
});

export default ProfilePage;
