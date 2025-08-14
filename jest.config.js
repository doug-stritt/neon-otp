module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/',
  ],
  // Add these to handle the import scope issue
  moduleNameMapper: {
    '^expo$': '<rootDir>/node_modules/expo/AppEntry.js',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  // Add this to handle the __ExpoImportMetaRegistry issue
  globals: {
    __ExpoImportMetaRegistry: {},
  },
  // Add this to handle the TextDecoder issue
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};
