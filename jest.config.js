module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-native-gesture-handler' +
      '|react-native-config' +
      '|@react-native-masked-view/masked-view' +
      '|react-native-skeleton-placeholder' +
      '|react-native-linear-gradient' +
      '|react-native-image-picker' +
      ')/)',
  ],
  moduleNameMapper: {
    '^react-native-gesture-handler$':
      '<rootDir>/__mocks__/react-native-gesture-handler.js',
    '^@react-native-async-storage/async-storage$':
      '@react-native-async-storage/async-storage/jest/async-storage-mock',
  },
};
