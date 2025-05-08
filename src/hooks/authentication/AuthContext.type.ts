type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export type {AuthContextType};
