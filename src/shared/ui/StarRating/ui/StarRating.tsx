import { memo, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import Star from '@/shared/assets/icons/star-20-20.svg';
import { Icon } from '@/shared/ui/Icon/Icon';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStar?: number;
  onSelect?: (starNumber: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, size = 30, selectedStar = 0, onSelect,
    } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStar);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStar));

    const mods = (starNumber: number): Mods => ({
        [cls.selected]: isSelected,
        [cls.hovered]: currentStarCount >= starNumber,
        [cls.normal]: currentStarCount < starNumber,
    });

    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starNumber);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starNumber);
            setIsSelected(true);
            onSelect?.(starNumber);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    key={starNumber}
                    width={size}
                    height={size}
                    className={classNames(cls.starIcon, mods(starNumber), [])}
                    Svg={Star}
                    onClick={onClick(starNumber)}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                />
            ))}
        </div>
    );
});
