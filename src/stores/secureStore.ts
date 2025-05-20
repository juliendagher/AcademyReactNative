import * as Keychain from 'react-native-keychain';

export const secureStorage = {
  getItem: async (key: string) => {
    const credentials = await Keychain.getGenericPassword({service: key});
    if (credentials && credentials.username === key) {
      return credentials.password;
    }
    return null;
  },

  setItem: async (key: string, value: string) => {
    await Keychain.setGenericPassword(key, value);
  },

  removeItem: async (key: string) => {
    await Keychain.resetGenericPassword({service: key});
  },
};
