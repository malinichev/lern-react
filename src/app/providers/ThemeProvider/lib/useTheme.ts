import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme || '';
    }, [theme]);

    const toggleTheme = () => {
        let newTheme:Theme;

        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.YELLOW;
            break;
        case Theme.YELLOW:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return <UseThemeResult>{
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
