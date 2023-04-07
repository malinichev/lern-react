import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';

import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileIsReadOnly } from 'entities/Profile/model/selectors/getProfileIsReadOnly/getProfileIsReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions } from 'entities/Profile';
import { updateProfileData } from 'entities/Profile/model/service/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface PageProps {
    className?: string;
}

const ProfilePageHeader = memo(({ className }: PageProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileIsReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => dispatch(profileActions.setReadOnly(false)), [dispatch]);
    const onSave = useCallback(() => dispatch(updateProfileData()), [dispatch]);
    const onCancelEdit = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);

    return (

        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <div className={cls.editBtn}>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>
                </div>
            )}
        </div>

    );
});

export default ProfilePageHeader;
