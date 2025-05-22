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

// import * as Keychain from 'react-native-keychain';

// export const secureStorage = {
//   getItem: async (key: string): Promise<string | null> => {
//     try {
//       const credentials = await Keychain.getGenericPassword({service: key});
//       return credentials ? credentials.password : null;
//     } catch (error) {
//       console.warn(`Keychain getItem error for key "${key}":`, error);
//       return null;
//     }
//   },

//   setItem: async (key: string, value: string): Promise<void> => {
//     try {
//       await Keychain.setGenericPassword(key, value, {service: key});
//     } catch (error) {
//       console.warn(`Keychain setItem error for key "${key}":`, error);
//     }
//   },

//   removeItem: async (key: string): Promise<void> => {
//     try {
//       await Keychain.resetGenericPassword({service: key});
//     } catch (error) {
//       console.warn(`Keychain removeItem error for key "${key}":`, error);
//     }
//   },
// };
