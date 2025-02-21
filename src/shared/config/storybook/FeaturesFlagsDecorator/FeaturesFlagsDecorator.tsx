import { Decorator } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeaturesFlagsDecorator: (features: FeatureFlags) => Decorator =
    (features) => (StoryComponent) => {
        setFeatureFlags(features);

        return <StoryComponent />;
    };
