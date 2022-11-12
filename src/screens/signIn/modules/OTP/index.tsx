import React, { useCallback, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import { NextButtonOff } from '../../components/NextButton';

AntDesign.loadFont();

export const OTP = () => {
  // Navigation
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);
  // OTP States
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // Next Button Handler
  const [input, setInput] = useState(false);
  const handleNext = () => {
    setInput(true)
  };

  return (
    <SafeAreaView key="signInFirst" style={styles.container}>
      <Text key="signHeader" style={styles.header}>
        Sign in
      </Text>
      <TouchableOpacity
        key="backButton"
        onPress={goBack}
        style={styles.backButton}>
        <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <View style={styles.personalContainer}>
        <Text style={styles.personal}>
          OTP
        </Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          4-digit code was sent to number PLACEHOLDER
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        {/* NOTE: Appears AFTER Initial Input & Wrong Info/Empty
        <Text style={styles.error}>Incorrect OTP</Text>
        */}
      </View>
      <View style={styles.resendContainer}>
        <TouchableOpacity>
          <Text style={styles.resend}>resend</Text>
        </TouchableOpacity>
        <Text style={styles.resendText}> in PLACEHOLDER</Text>
      </View>
      <View style={{flex: 1,justifyContent: 'flex-end'}}>
        <NextButtonOff />
      </View>
    </SafeAreaView>
  );
};