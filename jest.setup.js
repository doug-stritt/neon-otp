// Mock problematic Expo modules that cause import scope issues
jest.mock('expo', () => ({
  ...jest.requireActual('expo'),
  __ExpoImportMetaRegistry: {},
}));

// Mock React Native modules that cause issues
jest.mock('react-native/Libraries/Utilities/defineLazyObjectProperty', () => ({
  default: jest.fn(),
}));

// Mock the problematic runtime
global.__ExpoImportMetaRegistry = {};

// Mock TextDecoder and TextEncoder to avoid runtime issues
global.TextDecoder = class TextDecoder {
  constructor() { }
  decode() { return ''; }
};

global.TextEncoder = class TextEncoder {
  constructor() { }
  encode() { return new Uint8Array(); }
};

// Mock console methods to reduce noise during tests
global.console = {
  ...console,
  // Uncomment to ignore specific log levels
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};
