// eslint-disable-next-line malini4-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { Decorator } from '@storybook/react';

export const ThemeDecorator: (theme: Theme) => Decorator =
    (theme) => (StoryComponent) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
