type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  setTokens: (access: string, refresh: string, expiry: string) => void;
  clearTokens: () => void;
};

export type {AuthState};
