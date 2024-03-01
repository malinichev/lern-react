import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import {
    useGetProfileRatingQuery,
    useRateProfileArgMutation,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRatingQuery({
        profileId: profileId || '',
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfileArgMutation();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId: profileId || '',
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];

    return (
        <div className={classNames(cls.ProfileRating, {}, [className])}>
            <RatingCard
                onCancel={onCancel}
                onAccept={onAccept}
                rate={rating?.rate}
                className={className}
                title={t('Оцените профиль')}
                feedbackTitle={t(
                    'Оставьте свой отзыв о профиле, это поможет улучшить качество',
                )}
                hasFeedback
            />
        </div>
    );

    function onAccept(starsCount: number, feedback?: string) {
        handleRateProfile(starsCount, feedback);
    }

    function onCancel(starsCount: number) {
        handleRateProfile(starsCount);
    }
});
