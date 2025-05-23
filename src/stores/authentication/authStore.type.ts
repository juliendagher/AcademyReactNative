type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  isHydrated: boolean;
  setTokens: (access: string, refresh: string, expiry: string) => void;
  clearTokens: () => void;
  setIsHydrated: (isHydrated: boolean) => void;
};

export type {AuthState};
