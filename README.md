# Neon OTP

A modern, customizable One-Time Password (OTP) input component for React Native and Expo applications. Built with TypeScript and featuring a clean, intuitive user interface with comprehensive testing coverage.

## 🚀 Features

- **Auto-focus Navigation**: Automatically moves focus to the next input field when a digit is entered
- **Flexible Digit Count**: Configurable number of digits (4, 6, 8, or any custom count)
- **Smart Editing**: Tap any field to focus and edit, with seamless backspace navigation
- **Auto-submission**: Automatically submits the OTP when all digits are entered
- **Loading States**: Built-in loading indicator with input disabling during verification
- **TypeScript Support**: Fully typed with comprehensive interface definitions
- **Comprehensive Testing**: Extensive test coverage for all functionality

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (for development)

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on your preferred platform**
   ```bash
   # iOS Simulator
   npm run ios
   
   # Android Emulator
   npm run android
   
   # Web Browser
   npm run web
   ```

## 📖 Usage

### Basic Implementation

```tsx
import OtpInput from './src/components/OtpInput';

function App() {
  const handleOtpComplete = async (otp: string) => {
    // Handle OTP verification
    console.log('OTP entered:', otp);
    
    // Simulate API call
    try {
      // Your verification logic here
      await verifyOtp(otp);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <OtpInput
      numberOfDigits={6}
      onComplete={handleOtpComplete}
    />
  );
}
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test
```

### Test Coverage

The component includes comprehensive test coverage for:

- ✅ **Auto-focus Navigation**: Verifies focus moves to next field
- ✅ **Digit Editing**: Tests editing any digit in place
- ✅ **Auto-submission**: Confirms submission when complete
- ✅ **Loading States**: Validates loading behavior and input disabling
- ✅ **Edge Cases**: Handles rapid input, backspace, and error scenarios
