import {createContext, ReactNode, useContext, useState} from 'react';
import {ThemeContextType} from './ThemeContext.type';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark(prev => !prev);
  const colors = {
    primary: isDark ? '#3F4F44' : '#FAF6E9',
    secondary: isDark ? '#A27B5C' : '#DDEB9D',
    tertiary: isDark ? '#DCD7C9' : '#A0C878',
    text: isDark ? '#fff' : '#000',
    title: isDark ? '#fff' : '#000',
    background: isDark ? '#2C3930' : '#FFFDF6',
  };
  return (
    <ThemeContext.Provider value={{isDark, toggle, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useTheme};
