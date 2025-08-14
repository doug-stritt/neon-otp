import { StyleSheet, View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useRef, useEffect } from 'react';

interface OtpInputProps {
  numberOfDigits: number;
  onComplete: (otp: string) => void;
  isLoading?: boolean;
}

const OtpInput = ({ numberOfDigits, onComplete, isLoading = false }: OtpInputProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(''));
  const inputRefs = useRef<TextInput[]>([]);
  const hasCompleted = useRef(false);

  useEffect(() => {
    // Check if OTP is complete
    const otpString = otp.join('');
    if (otpString.length === numberOfDigits && !isLoading && !hasCompleted.current) {
      hasCompleted.current = true;
      onComplete(otpString);
    }
  }, [otp, numberOfDigits, onComplete, isLoading]);

  const handleOtpChange = (value: string, index: number) => {
    if (isLoading) return; // Prevent changes during loading

    // Reset completion flag when user starts editing
    if (hasCompleted.current) {
      hasCompleted.current = false;
    }

    const newOtp = [...otp];

    // Handle single digit input
    if (value.length === 1) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next field if not the last one
      if (index < numberOfDigits - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
    // Handle backspace
    else if (value.length === 0) {
      newOtp[index] = '';
      setOtp(newOtp);

      // Move to previous field if not the first one
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace key
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleInputPress = (index: number) => {
    // Focus the pressed input
    inputRefs.current[index]?.focus();
  };

  return (
    <View style={styles.otpContainer}>
      <Text style={styles.title}>Enter OTP Code</Text>
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleInputPress(index)}
            disabled={isLoading}
          >
            <TextInput
              ref={(ref) => {
                if (ref) inputRefs.current[index] = ref;
              }}
              style={[
                styles.input,
                digit ? styles.inputFilled : styles.inputEmpty,
                isLoading && styles.inputDisabled
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              editable={!isLoading}
              selectTextOnFocus
              textAlign="center"
            />
          </TouchableOpacity>
        ))}
      </View>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Verifying OTP...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    gap: 10,
  },
  input: {
    width: 50,
    height: 60,
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputEmpty: {
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F8F8',
  },
  inputFilled: {
    borderColor: '#007AFF',
    backgroundColor: '#FFFFFF',
  },
  inputDisabled: {
    opacity: 0.6,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default OtpInput;
