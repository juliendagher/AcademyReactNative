// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { secureStorage } from '../secureStore';

// type AuthState = {
//   accessToken: string | null;
//   refreshToken: string | null;
//   setTokens: (access: string, refresh: string) => void;
//   clearTokens: () => void;
// };

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       accessToken: null,
//       refreshToken: null,
//       setTokens: (accessToken, refreshToken) =>
//         set({ accessToken, refreshToken }),
//       clearTokens: () => set({ accessToken: null, refreshToken: null }),
//     }),
//     {
//       name: 'AUTH_STATE',
//       storage: secureStorage,
//     }
//   )
// );
