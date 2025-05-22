import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {secureStorage} from '../secureStore';
import {AuthState} from './authStore.type';
import ms from 'ms';

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      refreshToken: null,
      expiresAt: null,
      setTokens: (
        accessToken: string,
        refreshToken: string,
        expiresIn: string,
      ) => {
        const expiresAt = Date.now() + ms(expiresIn as ms.StringValue);
        set({accessToken, refreshToken, expiresAt});
      },
      clearTokens: () =>
        set({accessToken: null, refreshToken: null, expiresAt: null}),
    }),
    {
      name: 'AUTH_STATE',
      storage: createJSONStorage(() => secureStorage),
    },
  ),
);
