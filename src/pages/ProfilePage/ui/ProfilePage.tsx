import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';

import { useDynamicModuleLoader, ReducersList } from 'shared/lib/useDynamicModuleLoader';
import { memo } from 'react';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    useDynamicModuleLoader(reducers, true);
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE PAGE')}
        </div>

    );
});

export default ProfilePage;
