import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import {
    getProfileIsReadOnly,
} from '../../model/selectors/getProfileIsReadOnly/getProfileIsReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';

interface EditableProfileHeaderProps {
    className?: string;
}

export const EditableProfileHeader = memo((props: EditableProfileHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileIsReadOnly);
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileData);
    const authData = useSelector(getUserAuthData);
    const canEdit = profileData?.id === authData?.id;

    const onEdit = useCallback(() => dispatch(profileActions.setReadOnly(false)), [dispatch]);
    const onSave = useCallback(() => dispatch(updateProfileData()), [dispatch]);
    const onCancelEdit = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);

    return (

        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid="EditableProfileHeader.EditButton"
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <HStack gap="16">
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onCancelEdit}
                        data-testid="EditableProfileHeader.CancelButton"
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onSave}
                        data-testid="EditableProfileHeader.SaveButton"
                    >
                        {t('Сохранить')}
                    </Button>
                </HStack>

            )}

        </HStack>

    );
});
