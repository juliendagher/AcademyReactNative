import {createContext, ReactNode, useContext, useState} from 'react';
import {AuthContextType} from './AuthContext.type';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
