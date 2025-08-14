import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import OtpInput from './src/components/OtpInput';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpComplete = useCallback(async (otp: string) => {
    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      Alert.alert('Success', `OTP ${otp} verified successfully!`);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <OtpInput
        numberOfDigits={6}
        onComplete={handleOtpComplete}
        isLoading={isLoading}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
