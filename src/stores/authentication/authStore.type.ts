type AuthState = {
  token: string | null;
  setToken: (token: string | null) => Promise<void>;
  loadToken: () => Promise<void>;
};

export type {AuthState};
