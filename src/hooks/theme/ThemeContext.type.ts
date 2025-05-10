type ThemeContextType = {
  isDark: boolean;
  toggle: () => void;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    title: string;
    background: string;
  }
};

export type {ThemeContextType};
