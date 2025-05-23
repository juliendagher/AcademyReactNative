import * as Keychain from 'react-native-keychain';

export const secureStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const credentials = await Keychain.getGenericPassword({service: key});
    if (credentials !== false) {
      return credentials.password;
    }
    return null;
  },

  setItem: async (key: string, value: string): Promise<void> => {
    await Keychain.setGenericPassword(key, value, {service: key});
  },

  removeItem: async (key: string): Promise<void> => {
    await Keychain.resetGenericPassword({service: key});
  },
};
