import { Suspense } from 'react';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Decorator } from '@storybook/react';

export const SuspenseDecorator: Decorator = (StoryComponent) => (
    <Suspense fallback={<Skeleton />}>
        <StoryComponent />
    </Suspense>
);
