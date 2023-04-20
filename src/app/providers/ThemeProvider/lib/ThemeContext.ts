import { createContext } from 'react';

export enum Theme {
    LIGHT = 'app_theme_light',
    DARK = 'app_theme_dark',
    YELLOW = 'app_theme_yellow',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
